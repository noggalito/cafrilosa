var rawHelper = require('./raw'),
    gcseHelper = require('./gcse'),
    gsvHelper = require('./google-site-verification');

module.exports = function() {
  rawHelper();
  gcseHelper();
  gsvHelper();
};
