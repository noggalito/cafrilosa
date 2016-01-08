(function(){

  var successTemplate = "<div class='alert alert-success fade in'><a href='#' class='close' data-dismiss='alert' aria-label='close' style='color:black; opacity:1;'>&times;</a><strong>Genial :name:!</strong> Tu mensaje se envió exitosamente!</div>"

  var failTemplate = "<div class='alert alert-danger fade in'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>Lo sentimos :name:!</strong> Tenemos problemas al enviar tu mensaje. Intentalo mas tarde, por favor.</div>"

  $( "#form" ).submit(function(e) {
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

    posting.done(function( data ) {
      successTemplate = successTemplate.replace(':name:', name );
      $form.append(successTemplate);
      clearInputs();
    });

    posting.fail(function(data){
      failTemplate = failTemplate.replace(':name:', name);
      $form.append(failTemplate);
    })

    function clearInputs(){
      $form.each(function(){
        this.reset();
      })
    }
  });

})();
