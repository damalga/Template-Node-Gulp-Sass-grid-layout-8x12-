$(".arrow-down").on("click", function(){
  $(".arrow-down").css({"display":"none"});
  $(".arrow-up").css({"display":"block"});
  $(".table-data-sheet").css({"display":"block"});
});
$(".arrow-up").on("click", function(){
  $(".arrow-down").css({"display":"block"});
  $(".arrow-up").css({"display":"none"});
  $(".table-data-sheet").css({"display":"none"});
});
