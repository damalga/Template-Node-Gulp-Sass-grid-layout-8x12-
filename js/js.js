$(document).ready(function(){
  $("#txtInput").val();
  var txtInputVal = $("#txtInput").val();
  var arrBin = [];

  $("#btnCheck").click( function(){
    var txtInputValNew = txtInputVal / 2;
    var getRest = ~~(txtInputVal / 2);
    alert(txtInputVal);
    while(txtInputVal > 2){
      if(txtInputValNew > 2){
        txtInputValNew / 2;
        getRest;
        arrBin.push(getRest);
      } else if (txtInputValNew == 2){
        getRest;
        arrBin.push(getRest, txtInputValNew);
      };
    };
    $("#result").html(arrBin.reverse());
  });

});
