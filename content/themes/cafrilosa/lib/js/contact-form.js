(function(){
  'use strict';

  var $form = $('form.contact-form');
  var clearInputs = function() {
    $form.each(function(){
      this.reset();
    });
  };

  var alertTemplate = Handlebars.compile(
    $('.contact-form-response-template').html()
  );

  var formParams = function () {
    var params = {};
    $form.serializeArray().forEach(function (input) {
      params[input.name] = input.value;
    });
    return params;
  };

  $form.on('submit',function(e) {
    var url = $form.attr( "action" );

    $.post(url, formParams()).done(function(data){
      var context = {
        name: name,
        kind: 'success',
        message: 'tu mensaje ha sido enviado por correo. Nos pondremos en contacto contigo.'
      };
      $form.append(alertTemplate(context));
      clearInputs();
    }).fail(function(data){
      var context = {
        name: name,
        kind: 'danger',
        message: 'no hemos podido enviar tu mensaje. Por favor inténtalo más tarde.'
      };
      $form.append(alertTemplate(context));
    });

    return false;
  });
})();
