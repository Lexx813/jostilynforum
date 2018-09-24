"use strict";

const logger = require("../../logger");

class React {
  constructor(router) {
    this.router = router;
    this.register();
  }

  register() {
    this.router.get("/*/", this.render.bind(this));
  }

  render(ctx, next) {
    // Here i guess we need to send single html of react code
    ctx.body = "React route!";
  }
}

module.exports = React;
