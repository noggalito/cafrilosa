(function(){

  var successTemplate = "<div class='alert alert-success fade in'>"+
                          "<a href='#' class='close' data-dismiss='alert' aria-label='close' style='color:black; opacity:1;'>&times;</a>"+
                          "<strong>{{name}}</strong> {{message.success}}"+
                        "</div>"

  var failTemplate = "<div class='alert alert-danger fade in'>"+
                        "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>"+
                        "<strong>{{name}}</strong> {{message.fail}}"+
                      "</div>"

  $( "#form" ).on('submit',function(e) {
    e.preventDefault();

    var $form = $(this),
      name = $form.find( "input[name='name']" ).val(),
      email = $form.find( "input[name='email']" ).val(),
      message = $form.find( "textarea[name='message']" ).val(),
      url = $form.attr( "action" );

    var posting = $.post( url,
      {
        name: name,
        email: email,
        message: message
      }
    );

    var infoAlert = {
      success: Handlebars.compile(successTemplate),
      fail: Handlebars.compile(failTemplate)
    }

    var alertData = {
      name: name,
      message: {
        fail: "Lo sentimos! Tenemos problemas al enviar tu mensaje. Intentalo mas tarde, por favor.",
        success: "Tu mensaje se envió exitosamente. Tan pronto como sea posible nos pondremos en contacto."
      }
    }

    var successAlert = infoAlert.success(alertData);
    var failAlert = infoAlert.fail(alertData);

    posting.done(function(data){
      $form.append(successAlert);
      clearInputs();
    });

    posting.fail(function(data){
      $form.append(failAlert);
    })

    function clearInputs(){
      $form.each(function(){
        this.reset();
      })
    }

  });

})();
