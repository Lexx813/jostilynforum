"use strict";

const logger = require("../../logger");

// admin routes i won't focus for now, i don't think they are urgent.
class Admin {
  constructor(router) {
    this.router = router;
    this.register();
  }

  register() {
    this.router.get(
      [
        "/admin/login", // Lets not implement login for now, It will make it difficult for me to test all the time login and out. Annoying
        "/admin/logout",
        "/admin/console"
      ],
      this.render.bind(this)
    );

    // Future use!
    // this.router.post('/admin/remove-user', this.removeUser.bind(this));
    // this.router.post('/admin/remove-discussion', this.removeDiscussion.bind(this));
    // this.router.post('/admin/remove-comment', this.removeComment.bind(this));
    // this.router.post('/admin/block-ip', this.blockIP.bind(this));
  }

  render(ctx, next) {
    const pageToRender = ctx.request.url;
    ctx.body = "This page will be rendered => " + pageToRender;
  }
}

module.exports = Admin;
