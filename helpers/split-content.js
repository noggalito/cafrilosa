var hbs = require('express-hbs');

module.exports = function () {
  hbs.registerHelper('split-content', function (articles, options) {
    var splitChar = '</p>';

    var part = options.hash['part'],
        html = articles[0]['html'],
        parts = html.split(splitChar),
        half = parts.length / 2,
        thisPart;

    if (part == '1') {
      thisPart = parts.slice(0, half);
    } else {
      thisPart = parts.slice(half, parts.length);
    }
    return new hbs.SafeString(thisPart.join(splitChar));
  });
};
