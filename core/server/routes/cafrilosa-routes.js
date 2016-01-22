(function () {
  'use strict';

  var recaptcha = require('express-recaptcha');

  var siteKey = process.env.RECAPTCHA_KEY,
      secretKey = process.env.RECAPTCHA_SECRET;

  recaptcha.init(siteKey, secretKey);

  var routes = {
    makeRoutes: function (router, handler) {
      // mailer contact
      router.post(
        '/mail',
        recaptcha.middleware.verify,
        function (req, res) {
          if (!req.recaptcha.error) {
            return handler.submitContactForm(req, res);
          } else {
            return res.status(401).send('invalid recaptcha');
          }
        }
      );
    }
  };

  return module.exports = routes;
})();
