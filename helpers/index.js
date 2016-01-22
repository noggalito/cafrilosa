var rawHelper = require('./raw'),
    gcseHelper = require('./gcse'),
    gsvHelper = require('./google-site-verification'),
    recaptchaHelper = require('./recaptcha-helper');

module.exports = function() {
  rawHelper();
  gcseHelper();
  gsvHelper();
  recaptchaHelper();
};
