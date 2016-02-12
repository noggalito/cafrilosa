(function () {
  'use strict';

  var btnMenu = '.btn-menu',
      hamburguerClasses = 'icon-icon-menu glyphicon-remove';

  var toggleNavigation = function () {
    $(document).trigger('navigation:toggle');
    return false;
  };

  $(document).on('click', btnMenu, toggleNavigation);

  $(document).on('navigation:toggle', function () {
    $(btnMenu).toggleClass(hamburguerClasses);
    $('.nav').toggleClass('is-active');
  });

  $(window).on("scroll", stikyMenu );

	function stikyMenu(){
		if ( $(window).scrollTop() > 1 ){
			$(".navigation").addClass("menu-fixed");
		}
		else{
			$(".navigation").removeClass("menu-fixed");
		}
	}
})();
