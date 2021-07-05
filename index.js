const server = require("./api/server");

server.listen(3459, () => {
  console.log("\n** Server Running on http://localhost:3459 **\n");
});
