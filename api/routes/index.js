"use strict";

// non-react routes needs to be before react routes ( seems like :) )
const AdminRoutes = require("./admin");

// You can change the name or how i coded this reactRoutes
const ReactRoute = require("./user");

module.exports = router => {
  new AdminRoutes(router);
  new ReactRoute(router);
};
