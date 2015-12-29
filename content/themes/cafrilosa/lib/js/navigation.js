(function () {
  'use strict';

  var btnMenu = '.btn-menu',
      hamburguerClasses = 'glyphicon-menu-hamburger glyphicon-remove';

  $(document).on('click', btnMenu, function (e) {
    $(e.originalEvent.target).toggleClass(hamburguerClasses);
    $('.nav .nav-list').toggleClass('is-active');
    return false;
  });
})();
