(function(){
  var windowSize = 'width=580,height=300';

  $('.share-facebook').on('click',function(){
    window
      .open(this.href,'facebook-share',windowSize);
    return false;
  });

  $('.share-twitter').on('click',function(){
    window
      .open(this.href,'twitter-share',windowSize);
    return false;
  });

})();
