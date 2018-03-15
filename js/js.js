$(document).ready(function(){
  let a;
  let b;
  let c;

  // function timer_1 (100, a, {alumno_1 : 1, alumno_2 : 2}){};
  // function timer_2 (200, b, [2,4,8]){};
  // function timer_3 (400, c, [12,16]){};

  function timer_1(){
    console.log("Hello 1");
  };
  function timer_2(){
    console.log("Hello 2");
  };
  function timer_3(){
    console.log("Hello 3");
  };

  function startTimer(){
      a = setTimeout(timer_1, 1000);
      b = setTimeout(timer_2, 2000);
      c = setTimeout(timer_3, 4000);
  }

  $("button").on("click", startTimer);
});
