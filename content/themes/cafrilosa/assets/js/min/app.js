!function(){"use strict";var n=$("form.contact-form"),e=function(){n.each(function(){this.reset()})};n.on("submit",function(a){var o=n.find("input[name='name']").val(),t=n.find("input[name='email']").val(),i=n.find("textarea[name='message']").val(),s=n.attr("action"),m=$.post(s,{name:o,email:t,message:i}),r=Handlebars.compile($(".contact-form-response-template").html());return m.done(function(a){var t={name:o,kind:"success",message:"tu mensaje ha sido enviado por correo. Nos pondremos en contacto contigo."};n.append(r(t)),e()}),m.fail(function(e){var a={name:o,kind:"danger",message:" no hemos podido enviar tu mensaje. Por favor inténtalo más tarde."};n.append(r(a))}),!1})}();
!function(){"use strict";var t="AIzaSyDKeYOA8bgsRLuBCH_104zFdOL1QV4ORbc",o=function(t){this.$selector=t,this.loadGmaps()};o.prototype.loadGmaps=function(){var o=$("<script />",{async:"async",defer:"defer",src:"https://maps.googleapis.com/maps/api/js?key="+t+"&callback=cafrilosaMap.gmapsLoaded"});$("body").append(o)},o.prototype.gmapsLoaded=function(){this.setLatLng(),this.createMap(),this.createInfoWindow(),this.createMarker(),this.infoWindowListener()},o.prototype.setLatLng=function(){this.latLng=new google.maps.LatLng(-3.976488,-79.206602)},o.prototype.createMap=function(){this.map=new google.maps.Map(this.$selector[0],{center:this.latLng,zoom:18})},o.prototype.createInfoWindow=function(){var t=$(".cafrilosa-map-tooltip")[0].outerHTML;this.infoWindow=new google.maps.InfoWindow({content:t})},o.prototype.createMarker=function(){this.marker=new google.maps.Marker({position:this.latLng,title:"Cafrilosa",map:this.map})},o.prototype.infoWindowListener=function(){var t=this;t.marker.addListener("click",function(){t.infoWindow.open(t.map,t.marker)})};var a=".cafrilosa-map";$(document).on("ready",function(){var t=$(a);t.length>0&&(window.cafrilosaMap=new o(t))})}();
!function(){"use strict";function n(){$(window).scrollTop()>1?$(".navigation").addClass("menu-fixed"):$(".navigation").removeClass("menu-fixed")}var i=".btn-menu",o="icon-icon-menu glyphicon-remove";$(document).on("click",i,function(n){return $(n.originalEvent.target).toggleClass(o),$(".nav .nav-list").toggleClass("is-active"),!1}),$(window).on("scroll",n)}();
!function(){var t=document.getElementsByTagName("gcse:search")[0].getAttribute("data-cx"),e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https:":"http:")+"//cse.google.com/cse.js?cx="+t;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(e,r)}(),function(){"use strict";var t=function(){this.iconSelector=".searchBox .box-iconContainer",this.gsceBtnSelector=".gsc-search-button input",this.gsceInputSelector=".gsc-input-box input",this.searchboxSelector=".searchBox .box-input input",this.searchFormSelector=".searchBox form",this.listeners(),this.triggerInputChange()};t.prototype.listeners=function(){$(document).on("keyup",this.searchboxSelector,$.proxy(this.updateGsceInput,this)),$(document).on("click",this.iconSelector,$.proxy(this.triggerAndSearch,this)),$(document).on("submit",this.searchFormSelector,$.proxy(this.triggerAndSearch,this))},t.prototype.triggerInputChange=function(){$(this.searchboxSelector).trigger("keyup")},t.prototype.triggerAndSearch=function(){return this.triggerInputChange(),this.performSearch()},t.prototype.updateGsceInput=function(t){this.gsceInput()&&this.gsceInput().val(t.currentTarget.value)},t.prototype.gsceInput=function(){return!this.$gsceInput&&$(this.gsceInputSelector).length>0&&(this.$gsceInput=$(this.gsceInputSelector)),this.$gsceInput},t.prototype.performSearch=function(t){return $(this.gsceBtnSelector).trigger("click"),!1},new t}();
!function(){var e="width=580,height=300";$(".share-facebook").on("click",function(){return window.open(this.href,"facebook-share",e),!1}),$(".share-twitter").on("click",function(){return window.open(this.href,"twitter-share",e),!1})}();