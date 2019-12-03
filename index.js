const server = require("./api/server");

server.listen(3459, () => {
  console.log("\n** Server Running on http://localhost:4000 **\n");
});
