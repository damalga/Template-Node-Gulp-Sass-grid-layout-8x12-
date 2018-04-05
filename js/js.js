$(document).ready(function(){
  // $("#sprite-change-1").hover(function(){
  //   $("#sprite").css({"background-position":"0 0"});
  // });
  // $("#sprite-change-2").hover(function(){
  //   $("#sprite").css({"background-position":"-256px 0"});
  // });
  // $("#sprite-change-3").hover(function(){
  //   $("#sprite").css({"background-position":"-512px 0"});
  // });
  // $("#sprite-change-4").hover(function(){
  //   $("#sprite").css({"background-position":"-768px 0"});
  // });

  // $("#sprite").mousemove(function(e){
  //   var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
  //   console.log(pageCoords);
  // });

  $("#sprite").mousemove(function(e){
    if(e.pageY < 42){
      $("#sprite").css({"background-position":"0 0"});
    }else if(e.pageY > 43 && e.pageY < 84){
      $("#sprite").css({"background-position":"-256px 0"});
    }else if(e.pageY > 85 && e.pageY < 126){
      $("#sprite").css({"background-position":"-512px 0"});
    }else if(e.pageY > 127 && e.pageY < 168){
      $("#sprite").css({"background-position":"-768px 0"});
    }
  });

});
