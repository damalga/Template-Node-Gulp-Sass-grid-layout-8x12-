$(document).ready(function(){

  var synth_fm = new Tone.FMSynth().toMaster()

  $("div").each(function(){
    $(this).mousedown(function(e){
      synth_fm.triggerAttack(e.target.textContent);
    })
    $(this).mouseup(function(e){
      synth_fm.triggerRelease();
    })
  })

});
