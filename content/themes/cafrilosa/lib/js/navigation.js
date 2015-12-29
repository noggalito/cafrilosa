$(function(){
  'use strict'
  var $btnMenu = $('.btn-menu');
  var $navList = $('.nav').find('.nav-list');

  $btnMenu.click(function(e){
    e.preventDefault();
    $(this).toggleClass('glyphicon-menu-hamburger glyphicon-remove');
    $navList.toggleClass('is-active');
  })

});
