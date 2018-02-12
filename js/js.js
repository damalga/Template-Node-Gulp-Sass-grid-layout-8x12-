$(function(){
  var minNum = 0;
  var maxNum = 100;
  var browserNum = maxNum / 2;

  var random = Math.floor(Math.random() * maxNum);
  var randomNumInput = $("#randomNumInput").val(random); // Comentar linea en producción

  var k = 0;
  var q = 0;

  $("#compare0").click(function(){

      // Parte 1
      var userNum = $("#userNum").val();
      if(userNum > random){
        k++;
        $("#userTry").html(k);
        $("#userMsg").html("Menos"); // -
      }else if(userNum < random){
        k++;
        $("#userTry").html(k);
        $("#userMsg").html("Más"); // +
      }else{
        k++;
        $("#userTry").html(k);
        $("#userMsg").html("Has acertado!"); // =
        $("#userTry").removeClass("badge-warning").addClass("badge-success");

        // Parte 2
        $("#browserMsg").html("Ahora piensa un número...");
        setTimeout(function(){
          $("#browserNum").val(50);
        }, 2800);

        $("#compare1").click(function(){ // +
          q++;
          $("#browserTry").html(q);
          minNum = browserNum;
          browserNum = browserNum + Math.floor((maxNum - minNum)/2); // 75
          $("#browserNum").val(browserNum);
          if(q > 6){
            $("#browserMsg").html("¿Estas haciendo trampas?")
          };
        });

        $("#compare2").click(function(){ // -
          q++;
          $("#browserTry").html(q);
          maxNum = browserNum;
          browserNum = browserNum - Math.floor((maxNum - minNum)/2); // 25
          $("#browserNum").val(browserNum);
          if(q > 6){
            $("#browserMsg").html("¿Estas haciendo trampas?")
          };
        });

        $("#compare3").click(function(){ // =
          $("#browserTry").removeClass("badge-warning").addClass("badge-success");
          $("#browserMsg").html("Has acertado!");
          if(k < q){
            $("#winner").html("Has ganado al navegador.")
          }else{
            $("#winner").html("Lo siento, has perdido.")
          };
        });
      };
    });
    
});
