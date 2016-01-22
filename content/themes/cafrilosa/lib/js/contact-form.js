(function(){
  'use strict';

  var ContactForm = function () {
    this.$form = $('form.contact-form');
    this.url = this.$form.attr( 'action' );
    this.toggleBtn = '.submit-contact-form-btn';
    this.alertSelector = '.contact-form-response-template';
    this.submittingSelector = '.submitting-form';
    this.eventListeners();
  };

  ContactForm.prototype.submit = function () {
    this.$form.submit();
    this.$form.find(this.submittingSelector).removeClass('hidden');
  };

  ContactForm.prototype.eventListeners = function () {
    this.$form.on(
      'submit',
      $.proxy(this.formSubmitted, this)
    );
    $(document).on(
      'click',
      this.toggleBtn,
      $.proxy(this.willSubmit, this)
    );
    $(document).on(
      'contactForm:submit',
      $.proxy(this.submit, this)
    )
  };

  ContactForm.prototype.willSubmit = function () {
    if (this.isValid()) {
      return this.showRecaptcha();
    }

    return false;
  };

  ContactForm.prototype.isValid = function () {
    var params = this.formParams(),
        field,
        requiredFields = [
          'name',
          'email',
          'message'
        ];

    for (var i = 0; i < requiredFields.length; i++) {
      field = requiredFields[i];
      if ($.trim(params[field]) == '') {
        return false;
      }
    }

    return true;
  };

  ContactForm.prototype.showRecaptcha = function () {
    $(this.toggleBtn).remove();
    $(document).trigger('contactForm:showRecaptcha', this);
    return false;
  };

  ContactForm.prototype.formSubmitted = function (e) {
    $.post(
      this.url,
      this.formParams()
    ).done(
      $.proxy(this.contactSuccessful, this)
    ).fail(
      $.proxy(this.contactFailure, this)
    );
    return false;
  };

  ContactForm.prototype.formParams = function () {
    var params = {};
    this.$form.serializeArray().forEach(function (input) {
      params[input.name] = input.value;
    });
    return params;
  };

  ContactForm.prototype.alert = function (context) {
    var template = Handlebars.compile(
      $(this.alertSelector).html()
    )(context);
    this.$form.append(template);
  };

  ContactForm.prototype.clearInputs = function() {
    this.$form.each(function(){
      this.reset();
    });
    this.$form.find(this.submittingSelector).addClass('hidden');
    $(document).trigger('contactForm:clearInputs', this);
  };

  ContactForm.prototype.contactSuccessful = function () {
    this.clearInputs();
    this.alert({
      kind: 'success',
      message: 'Tu mensaje ha sido enviado por correo. Nos pondremos en contacto contigo.'
    });
  };

  ContactForm.prototype.contactFailure = function () {
    this.alert({
      kind: 'danger',
      message: 'No hemos podido enviar tu mensaje. Por favor inténtalo más tarde.'
    });
  };

  new ContactForm();
})();
