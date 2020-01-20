(function($) {
  $.fn.highlight02 = function(color) {
    return this.each(function() {
      $(this)
      .data('original-color', $(this).css('background-color'))
      .mouseenter(function() {
        $(this).css('background-color', color || '#fff47f');
      })
      .mouseleave(function() {  
        $(this).css('background-color', $(this).data('original-color'));
      });
    });
  }
})(jQuery);
