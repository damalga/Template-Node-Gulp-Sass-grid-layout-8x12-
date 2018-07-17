// READY & RESIZE
$(document).ready(readyResize);
$(window).resize(readyResize);
function readyResize(){
  // x > ...
  if($(window).width() > 1200){
    $(".navbar-ul").removeAttr("style");
    $(".icons-container i").removeAttr("style");
  };
  if($(window).width() > 992){
    $("#btn-white").prependTo(".btn-container");
  };
  if($(window).width() > 768){
    $("#slide-img").appendTo("#slide");
  };
  // x < ...
  if($(window).width() < 1200){
  };
  if($(window).width() < 992){
    $("#btn-white").appendTo(".navbar-ul");
  };
  if($(window).width() < 768){
    $("#slide-img").prependTo("#slide");
  };
};

// NAV
// bars (menu) icon
$("#bars").on('click', function(){
  $(this).toggle();
  $(".navbar-ul").show();
  $("#times").toggle();
});
// times (cross) icon
$("#times").on('click', function(){
  $(this).toggle();
  $(".navbar-ul").hide();
  $("#bars").toggle();
});

// OWL.CAROUSEL
$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 256,
  slidesToShow: 1,
  adaptiveHeight: true
});

// fadeOut & fadeIn content-center
$(window).scroll(function() {
  if($(window).width() < 1200){
    if ($(this).scrollTop() > 0) {
      $("#content-center").fadeOut(128);
    } else {
      $("#content-center").fadeIn(128);
    }
  };
});
