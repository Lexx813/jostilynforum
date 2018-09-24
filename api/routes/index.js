"use strict";

// non-react routes
const AdminRoutes = require("./admin");

/// React Routes
const ReactRoute = require("./user");

module.exports = router => {
  new AdminRoutes(router);
  new ReactRoute(router);
};
