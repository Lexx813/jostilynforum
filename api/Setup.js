"use strict";

const KoaRouter = require("koa-router");
const json = require("koa-json");
const helmet = require("koa-helmet");
const routes = require("./routes/index.js");

class SetupServer {
  constructor(server) {
    this.server = server;
    this.router = new KoaRouter();
    this.json = json();
    this.helmet = helmet();
  }

  initialize() {
    this.server.use(this.json);
    this.server.use(this.router.routes()).use(this.router.allowedMethods());
    this.server.use(this.helmet);
  }

  startServer(PORT) {
    this.server.listen(PORT, () =>
      console.log(`SERVER STARTED AT PORT ${PORT}`)
    );
  }

  staticsAssets() {
    /*
    * This is where left, i couldn't server static assets. 
    * All routes sends the index.html but we need to figure out the right koa static file module
    *  I spend an hour to server static files in the '/client/public/~' but i couldn't find the right koa module to fix it
    */
    // this.server.use( ? );
  }

  views() {
    // Later for admin panel
  }

  routes() {
    routes(this.router);
  }
}

module.exports = SetupServer;
