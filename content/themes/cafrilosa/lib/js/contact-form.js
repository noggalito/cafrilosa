(function(){
  'use strict';

  var $form = $('form.contact-form');
  var clearInputs = function() {
    $form.each(function(){
      this.reset();
    });
  };

  $form.on('submit',function(e) {
    var name = $form.find( "input[name='name']" ).val(),
      email = $form.find( "input[name='email']" ).val(),
      message = $form.find( "textarea[name='message']" ).val(),
      url = $form.attr( "action" );

    var posting = $.post(url, {
      name: name,
      email: email,
      message: message
    });

    var alertTemplate = Handlebars.compile(
      $('.contact-form-response-template').html()
    );

    posting.done(function(data){
      var context = {
        name: name,
        kind: 'success',
        message: 'tu mensaje ha sido enviado por correo. Nos pondremos en contacto contigo.'
      };
      $form.append(alertTemplate(context));
      clearInputs();
    });

    posting.fail(function(data){
      var context = {
        name: name,
        kind: 'danger',
        message: ' no hemos podido enviar tu mensaje. Por favor inténtalo más tarde.'
      };
      $form.append(alertTemplate(context));
    });

    return false;
  });
})();
