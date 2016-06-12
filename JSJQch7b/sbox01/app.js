$(function() {
  $('.animate').on('mouseover',function() {
    $(this).height($(this).height()*1.75),
    $(this).width($(this).width()*1.75);
  });
});
$(function() {
  $('.animate').on('mouseout',function() {
    $(this).height($(this).height()/1.75),
    $(this).width($(this).width()/1.75);
  });
});
