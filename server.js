const Koa = require("koa");
const app = new Koa();
const SetupServer = require("./api/Setup");
const PORT = 5000;

const Setup = new SetupServer(app);

(async function init() {
  // initialize
  await Setup.initialize();

  // Static assets
  // ...

  // Routes
  await Setup.routes();

  // Start server
  await Setup.startServer(PORT);
})();

process.on("unhandledRejection", error => {
  console.log(error);
  process.exit(1);
});
