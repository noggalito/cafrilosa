(function() {
  var cx = document.getElementsByTagName('gcse:search')[0].getAttribute('data-cx');
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
      '//cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();

(function () {
  'use strict';

  var SearchBox = function () {
    this.navSelector        = '.nav';
    this.wrapperSelector    = '.searchBox';
    this.iconSelector       = '.searchBox .box .glyphicon';
    this.gsceBtnSelector    = '.gsc-search-button input';
    this.gsceInputSelector  = '.gsc-input-box input';
    this.searchboxSelector  = '.searchBox .box-input input';
    this.searchFormSelector = '.searchBox form';
    this.listeners();
    this.triggerInputChange();
  };

  SearchBox.prototype.listeners = function () {
    $(document).on(
      'keyup',
      this.searchboxSelector,
      $.proxy(this.updateGsceInput, this)
    );
    $(document).on(
      'click',
      this.iconSelector,
      $.proxy(this.triggerAndSearch, this)
    );
    $(document).on(
      'submit',
      this.searchFormSelector,
      $.proxy(this.triggerAndSearch, this)
    );
    $(document).on(
      'mouseenter',
      this.wrapperSelector,
      $.proxy(this.show, this)
    );
    $(document).on(
      'mouseleave',
      this.wrapperSelector,
      $.proxy(this.scheduleHide, this)
    );
  };

  SearchBox.prototype.show = function (e) {
    var $box = $(e.currentTarget).find('.box');
    $box.addClass('active');
    if (this.scheduledHideId) {
      window.clearTimeout(this.scheduledHideId);
      this.scheduledHideId = undefined;
    }
  };

  SearchBox.prototype.scheduleHide = function (e) {
    var seconds = 1,
        $box = $(e.currentTarget).find('.box');
    this.scheduledHideId = window.setTimeout(function () {
      $box.removeClass('active');
    }, seconds * 1000);
  };

  SearchBox.prototype.triggerInputChange = function () {
    $(this.searchboxSelector).trigger('keyup');
  };

  SearchBox.prototype.triggerAndSearch = function () {
    this.triggerInputChange();
    this.hideNavbar();
    return this.performSearch();
  };

  SearchBox.prototype.hideNavbar = function () {
    $(document).trigger('navigation:toggle');
  };

  SearchBox.prototype.updateGsceInput = function (e) {
    if (this.gsceInput()) {
      this.gsceInput().val(e.currentTarget.value);
    }
  };

  SearchBox.prototype.gsceInput = function () {
    if (!this.$gsceInput && $(this.gsceInputSelector).length > 0) {
      this.$gsceInput = $(this.gsceInputSelector);
    }
    return this.$gsceInput;
  };

  SearchBox.prototype.performSearch = function (e) {
    $(this.gsceBtnSelector).trigger('click');
    return false;
  };

  new SearchBox();
})();
