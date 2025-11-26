const { authHandler } = require("netlify-cms-oauth-provider-node");

exports.handler = authHandler({
  provider: "github",
  successRedirect: "/admin/",
});
