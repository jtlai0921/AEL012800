(function($) {
  $.fn.highlight03 = function(options) {
    return this.each(function() {
      $(this)
      .data('original-color', $(this).css('background-color'))
      .mouseenter(function() {
        $(this).css('background-color', options.color);
      })
      .mouseleave(function() { 
        $(this).css('background-color', $(this).data('original-color'));
      });
    });
  }
  // 選項的預設值
  $.fn.highlight03.defaults = {
    color: '#fff47f'    
  };
})(jQuery);