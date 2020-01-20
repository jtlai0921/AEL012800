(function($) {
  $.fn.highlight04 = function(options, callback) {
    if ($.isFunction(options)) {  // 是否是回撥函數
      callback = options;
      options = null;
    }
    options = $.extend($.fn.highlight04.defaults, options);
    return this.each(function() {
      $(this)
      .data('original-color', $(this).css('background-color'))
      .mouseenter(function() {
        $(this).css('background-color', options.color);
      })
      .mouseleave(function() { 
        $(this).css('background-color', $(this).data('original-color'));
      });
      // 呼叫setup回撥函數
      $.isFunction( options.setup ) && options.setup.call(this);
    });
  }
  $.fn.highlight04.defaults = {
    color: '#fff47f',
    setup: null  
  };
})(jQuery);