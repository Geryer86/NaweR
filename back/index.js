const server = require("./src/app");

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`PORT ${port} ON`);
});