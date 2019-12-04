const express = require("express");

const dataRouter = require("../data/data-router");

const server = express();

server.use(express.json()); // This is a place for middleware?

server.use("/api/posts/", dataRouter);

module.exports = server;
