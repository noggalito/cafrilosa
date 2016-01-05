(function () {
  'use strict';

  var apiKey = 'AIzaSyDKeYOA8bgsRLuBCH_104zFdOL1QV4ORbc';

  var CafrilosaMap = function ($selector) {
    this.$selector = $selector;
    this.loadGmaps();
  };

  CafrilosaMap.prototype.loadGmaps = function () {
    var $script = $('<script />', {
      async: 'async',
      defer: 'defer',
      src: 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=cafrilosaMap.gmapsLoaded'
    });
    $('body').append($script);
  };

  CafrilosaMap.prototype.gmapsLoaded = function () {
    this.setLatLng();
    this.createMap();
    this.createInfoWindow();
    this.createMarker();
    this.infoWindowListener();
  };

  CafrilosaMap.prototype.setLatLng = function () {
    this.latLng = new google.maps.LatLng(
      -3.976488,
      -79.206602
    );
  };

  CafrilosaMap.prototype.createMap = function () {
    this.map = new google.maps.Map(this.$selector[0], {
      center: this.latLng,
      zoom: 18
    });
  };

  CafrilosaMap.prototype.createInfoWindow = function () {
    var content = $('.cafrilosa-map-tooltip')[0].outerHTML;
    this.infoWindow = new google.maps.InfoWindow({
      content: content
    });
  };

  CafrilosaMap.prototype.createMarker = function () {
    this.marker = new google.maps.Marker({
      position: this.latLng,
      title: 'Cafrilosa',
      map: this.map
    });
  };

  CafrilosaMap.prototype.infoWindowListener = function () {
    var self = this;
    self.marker.addListener('click', function () {
      self.infoWindow.open(self.map, self.marker);
    });
  };

  var selector = '.cafrilosa-map';

  $(document).on('ready', function () {
    var $selector = $(selector);
    if ($selector.length > 0) {
      window.cafrilosaMap = new CafrilosaMap($selector);
    }
  });
})();
