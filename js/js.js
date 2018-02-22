$(document).ready(function(){
  $("#btnCheck").click( function(){

    var txtInputVal = $("#txtInput").val();
    var txtInputValNew = txtInputVal;
    var arrBin = [];

    while(txtInputValNew >= 2){
      var getRest = txtInputValNew % 2;
      Math.floor(txtInputVal / 2);
      arrBin.push(getRest);
      txtInputValNew = Math.floor(txtInputValNew / 2);
    };

    arrBin.push(1);
    result = arrBin.reverse().join('');

    $("#result").html(result);
  });
});
