module.exports = function() {
  [
    'raw',
    'gcse',
    'split-content',
    'recaptcha-helper',
    'google-site-verification'
  ].forEach(function (helper) {
    require('./' + helper)();
  });
};
