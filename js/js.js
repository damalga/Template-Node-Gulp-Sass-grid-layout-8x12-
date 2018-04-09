$(".title-table").on("click", function(){
  $(this).next().toggle();
  $(this).children(".arrow-down").toggle();
  $(this).children(".arrow-up").toggle();
});
