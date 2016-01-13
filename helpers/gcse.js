var hbs = require('express-hbs');

module.exports = function () {
  hbs.registerHelper('gcse', function () {
    var cx = process.env.GCSE_CX;
    return '<gcse:search data-cx="' + cx + '"></gcse:search>';
  });
};
