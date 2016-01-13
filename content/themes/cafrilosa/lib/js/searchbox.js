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
    this.iconSelector       = '.searchBox .box-iconContainer';
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
  };

  SearchBox.prototype.triggerInputChange = function () {
    $(this.searchboxSelector).trigger('keyup');
  };

  SearchBox.prototype.triggerAndSearch = function () {
    this.triggerInputChange();
    return this.performSearch();
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
