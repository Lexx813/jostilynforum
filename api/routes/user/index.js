"use strict";

const logger = require("../../logger");
const send = require("koa-send");

class React {
  constructor(router) {
    this.router = router;
    this.register();
  }

  register() {
    this.router.get("/*/", this.render.bind(this));
  }

  async render(ctx, next) {
    await send(ctx, "/client/public/index.html");
  }
}

module.exports = React;
