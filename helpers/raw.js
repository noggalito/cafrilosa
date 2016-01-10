var hbs = require('express-hbs');

module.exports = function(){
  hbs.registerHelper('escaped-raw', function (expression) {
    return '{{' + expression + '}}';
  });
};
