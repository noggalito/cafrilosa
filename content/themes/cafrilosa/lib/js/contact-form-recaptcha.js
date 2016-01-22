(function () {
  'use strict';

  var ContactFormRecaptcha = function () {

    this.recaptchaWrapper = '.cafrilosa-recaptcha-wrapper';
    this.eventListeners();
  };

  ContactFormRecaptcha.prototype.eventListeners = function () {
    $(document).on(
      'contactForm:showRecaptcha',
      $.proxy(this.showRecaptcha, this)
    );
    $(document).on(
      'contactForm:clearInputs',
      $.proxy(this.clearInputs, this)
    );
  };

  ContactFormRecaptcha.prototype.clearInputs = function () {
    grecaptcha.reset();
    $(this.recaptchaWrapper).remove();
  };

  ContactFormRecaptcha.prototype.showRecaptcha = function () {
    $(this.recaptchaWrapper).removeClass('hidden')
                            .find("input[type='submit']").hide();
    return false;
  };

  ContactFormRecaptcha.prototype.recaptchaOkay = function () {
    $(document).trigger('contactForm:submit');
  };

  var contactFormRecaptcha = new ContactFormRecaptcha();
  window.recaptchaOkay = contactFormRecaptcha.recaptchaOkay;
})();
