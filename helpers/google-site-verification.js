var hbs = require('express-hbs');

module.exports = function () {
  hbs.registerHelper('google-site-verification', function () {
    var id = process.env.GOOGLE_SITE_VERIFICATION;
    return id;
  });
};
