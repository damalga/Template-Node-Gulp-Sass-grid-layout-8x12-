// READY & RESIZE
$(document).ready(readyResize);
$(window).resize(readyResize);
function readyResize() {
  // x > ...
  if($(window).width() > 1200){
    $(".navbar-ul").removeAttr("style");
    $(".icons-container i").removeAttr("style");
  };
  if($(window).width() > 992){
    $("#btn-white").prependTo(".btn-container");
  };
  // x < ...
  if($(window).width() < 1200){
  };
  if($(window).width() < 992){
    $("#btn-white").appendTo(".navbar-ul");
    // $(".owl-item.active .img").prependTo($(".owl-item.active"));
  };
}

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
$(".owl-carousel").owlCarousel({
  loop:true,
  nav:true,
  responsive:{
    0:{
      items:1
    }
  }
})
