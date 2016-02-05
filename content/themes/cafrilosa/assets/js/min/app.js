!function(){"use strict";var t=function(){this.recaptchaWrapper=".cafrilosa-recaptcha-wrapper",this.eventListeners()};t.prototype.eventListeners=function(){$(document).on("contactForm:showRecaptcha",$.proxy(this.showRecaptcha,this)),$(document).on("contactForm:clearInputs",$.proxy(this.clearInputs,this))},t.prototype.clearInputs=function(){grecaptcha.reset(),$(this.recaptchaWrapper).remove()},t.prototype.showRecaptcha=function(){return $(this.recaptchaWrapper).removeClass("hidden").find("input[type='submit']").hide(),!1},t.prototype.recaptchaOkay=function(){$(document).trigger("contactForm:submit")};var e=new t;window.recaptchaOkay=e.recaptchaOkay}();
!function(){"use strict";var t=function(){this.$form=$("form.contact-form"),this.url=this.$form.attr("action"),this.toggleBtn=".submit-contact-form-btn",this.alertSelector=".contact-form-response-template",this.submittingSelector=".submitting-form",this.eventListeners()};t.prototype.submit=function(){this.$form.submit(),this.$form.find(this.submittingSelector).removeClass("hidden")},t.prototype.eventListeners=function(){this.$form.on("submit",$.proxy(this.formSubmitted,this)),$(document).on("click",this.toggleBtn,$.proxy(this.willSubmit,this)),$(document).on("contactForm:submit",$.proxy(this.submit,this))},t.prototype.willSubmit=function(){return this.isValid()?this.showRecaptcha():!1},t.prototype.isValid=function(){for(var t,o=this.formParams(),i=["name","email","message"],e=0;e<i.length;e++)if(t=i[e],""==$.trim(o[t]))return!1;return!0},t.prototype.showRecaptcha=function(){return $(this.toggleBtn).remove(),$(document).trigger("contactForm:showRecaptcha",this),!1},t.prototype.formSubmitted=function(t){return $.post(this.url,this.formParams()).done($.proxy(this.contactSuccessful,this)).fail($.proxy(this.contactFailure,this)),!1},t.prototype.formParams=function(){var t={};return this.$form.serializeArray().forEach(function(o){t[o.name]=o.value}),t},t.prototype.alert=function(t){var o=Handlebars.compile($(this.alertSelector).html())(t);this.$form.append(o)},t.prototype.clearInputs=function(){this.$form.each(function(){this.reset()}),this.$form.find(this.submittingSelector).addClass("hidden"),$(document).trigger("contactForm:clearInputs",this)},t.prototype.contactSuccessful=function(){this.clearInputs(),this.alert({kind:"success",message:"Tu mensaje ha sido enviado por correo. Nos pondremos en contacto contigo."})},t.prototype.contactFailure=function(){this.alert({kind:"danger",message:"No hemos podido enviar tu mensaje. Por favor inténtalo más tarde."})},new t}();
!function(){"use strict";var t="AIzaSyDKeYOA8bgsRLuBCH_104zFdOL1QV4ORbc",o=function(t){this.$selector=t,this.loadGmaps()};o.prototype.loadGmaps=function(){var o=$("<script />",{async:"async",defer:"defer",src:"https://maps.googleapis.com/maps/api/js?key="+t+"&callback=cafrilosaMap.gmapsLoaded"});$("body").append(o)},o.prototype.gmapsLoaded=function(){this.setLatLng(),this.createMap(),this.createMarker(),this.createInfoWindow(),this.infoWindowListener()},o.prototype.setLatLng=function(){this.latLng=new google.maps.LatLng(-3.993202,-79.19845)},o.prototype.createMap=function(){this.map=new google.maps.Map(this.$selector[0],{center:this.latLng,zoom:18})},o.prototype.createInfoWindow=function(){var t=$(".cafrilosa-map-tooltip")[0].outerHTML;this.infoWindow=new google.maps.InfoWindow({content:t}),this.toggleInfoWindow()},o.prototype.createMarker=function(){this.marker=new google.maps.Marker({position:this.latLng,title:"Cafrilosa",map:this.map})},o.prototype.infoWindowListener=function(){this.marker.addListener("click",$.proxy(this.toggleInfoWindow,this))},o.prototype.toggleInfoWindow=function(){var t=this.infoWindow.getMap()?null:this.map;this.infoWindow.open(t,this.marker)};var e=".cafrilosa-map";$(document).on("ready",function(){var t=$(e);t.length>0&&(window.cafrilosaMap=new o(t))})}();
!function(){"use strict";function n(){$(window).scrollTop()>1?$(".navigation").addClass("menu-fixed"):$(".navigation").removeClass("menu-fixed")}var i=".btn-menu",o="icon-icon-menu glyphicon-remove";$(document).on("click",i,function(n){return $(n.originalEvent.target).toggleClass(o),$(".nav .nav-list").toggleClass("is-active"),!1}),$(window).on("scroll",n)}();
!function(){var t=document.getElementsByTagName("gcse:search")[0].getAttribute("data-cx"),e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https:":"http:")+"//cse.google.com/cse.js?cx="+t;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(e,r)}(),function(){"use strict";var t=function(){this.iconSelector=".searchBox .box-iconContainer",this.gsceBtnSelector=".gsc-search-button input",this.gsceInputSelector=".gsc-input-box input",this.searchboxSelector=".searchBox .box-input input",this.searchFormSelector=".searchBox form",this.listeners(),this.triggerInputChange()};t.prototype.listeners=function(){$(document).on("keyup",this.searchboxSelector,$.proxy(this.updateGsceInput,this)),$(document).on("click",this.iconSelector,$.proxy(this.triggerAndSearch,this)),$(document).on("submit",this.searchFormSelector,$.proxy(this.triggerAndSearch,this))},t.prototype.triggerInputChange=function(){$(this.searchboxSelector).trigger("keyup")},t.prototype.triggerAndSearch=function(){return this.triggerInputChange(),this.performSearch()},t.prototype.updateGsceInput=function(t){this.gsceInput()&&this.gsceInput().val(t.currentTarget.value)},t.prototype.gsceInput=function(){return!this.$gsceInput&&$(this.gsceInputSelector).length>0&&(this.$gsceInput=$(this.gsceInputSelector)),this.$gsceInput},t.prototype.performSearch=function(t){return $(this.gsceBtnSelector).trigger("click"),!1},new t}();
!function(){var e="width=580,height=300";$(".share-facebook").on("click",function(){return window.open(this.href,"facebook-share",e),!1}),$(".share-twitter").on("click",function(){return window.open(this.href,"twitter-share",e),!1})}();