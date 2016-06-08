$(function() {
  $('.animate').on('mouseover',function() {
    var $animate = $(this);
    $(this).animate({
      height: '175px',
      width: '175px',
    }, function(mouseout) {
      $(this).animate({
        height: '100px',
        width: '100px'
      });
    });
  });
});
