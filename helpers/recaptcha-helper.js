var hbs = require ('express-hbs');

module.exports = function () {
  hbs.registerHelper('recaptcha-key', function () {
    var key = process.env.RECAPTCHA_KEY;
    return key;
  });
}
