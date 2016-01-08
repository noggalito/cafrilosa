(function () {
  var news = $('.news');
  var newsSize = news.length;

  if(newsSize >= 1) {
    var pageTotal = document.getElementById('page-total').innerHTML;
    var pageCurrent = document.getElementById('page-current').innerHTML;
    var nav = document.getElementById('pagination-list');

    for (i = 1; i <= pageTotal; i++) {
      if (i == pageCurrent) {
        nav.innerHTML = nav.innerHTML + "<li class='active'><a href='#'>" + i + "</a></li>";
      } else {
        nav.innerHTML = nav.innerHTML + "<li><a href=/tag/novedades/page/" + i + ">" + i + "</a></li>";
      }
    }
  }

})();
