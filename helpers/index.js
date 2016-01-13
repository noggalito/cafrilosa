var rawHelper = require('./raw'),
    gcseHelper = require('./gcse');

module.exports = function() {
  rawHelper();
  gcseHelper();
};
