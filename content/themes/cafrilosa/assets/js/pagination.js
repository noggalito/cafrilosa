(function () {
  var tagTemplate = $('.tag-template');

  if( tagTemplate.length >= 1  ){
    var pageTotal   = document.getElementById('page-total').innerHTML;
    var pageCurrent = document.getElementById('page-current').innerHTML;
    var nav         = document.getElementById('pagination-list');
    var pathName    = window.location.pathname;
    var newUrl      = pathName.split('/').slice(1,3).join('/');

    if (parseInt(pageTotal, 10) === 0) {
      // hide pagination if 0 pages
      $('.pagination').hide();
    }

    for (i = 1; i <= pageTotal; i++) {
      if (i == pageCurrent) {
        nav.innerHTML = nav.innerHTML + "<li class='active'><a href='#'>" + i + "</a></li>";
      } else {
        nav.innerHTML = nav.innerHTML + "<li><a href=/"+ newUrl +"/page/" + i + ">" + i + "</a></li>";
      }
    }
  }

})();
