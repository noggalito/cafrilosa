(function () {
  'use strict';

  var btnMenu = '.btn-menu',
      hamburguerClasses = 'icon-icon-menu glyphicon-remove';

  $(document).on('click', btnMenu, function (e) {
    $(e.originalEvent.target).toggleClass(hamburguerClasses);
    $('.nav .nav-list').toggleClass('is-active');
    return false;
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
