(function($) {
  $.fn.highlight01 = function() {
    return this.each(function() {
      $(this)
      .data('original-color', $(this).css('background-color'))
      .mouseenter(function() {
        $(this).css('background-color', '#fff47f');
      })
      .mouseleave(function() { 
        $(this).css('background-color', $(this).data('original-color'));
      });
    });
  }
})(jQuery);