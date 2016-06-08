$(function() {//new JQ function
  var $window = $(window);//make window into JQ obj. and store as var $window
  var $slideAd = $('#slideAd'); //make <div> w/ id 'slideAd' into JQ obj. and store as var '$slideAd'
  var endZone = $('#footer').offset().top - $window.height() - 500;//likewise w/ <p> id 'footer' when offset from top of window by height of window less 500px, storing as var 'endZone'

  $window.on('scroll', function() {//when $window is scrolled run function...

    if (endZone < $window.scrollTop()) {//if endZone is less than height of $window when scrolled to top...
      $slideAd.animate({ 'right': '0px' }, 250);//...animate $slideAd all the way to right margin in 1/4 sec.
    } else {//otherwise
      $slideAd.stop(true).animate({ 'right': '-360px' }, 250);//animate all the way out by 360px in 1/4 sec.
    }

  });

});
