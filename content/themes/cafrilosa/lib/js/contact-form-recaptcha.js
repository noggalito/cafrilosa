(function () {
  'use strict';

  var btnSelector = '.submit-contact-form-btn',
      recaptchaWrapper = '.cafrilosa-recaptcha-wrapper';

  $(document).on('click', btnSelector, function () {
    $(recaptchaWrapper).removeClass('hidden');
    $(this).remove();
    return false;
  });
})();
