let i = 0;
let text1 = "Dear Pankaj,";
let text2 =
  "I promise to love you forever. There were times when I made you feel sad but I promise to make things better...I may not have expressed much or made you feel not so important but trust me you are the best thing happened to me ever... You are different but still we are same because we both love each other no matter what";
let speed = 100;

function typeWriter(text, para) {
  if (ok == 2) {
    clearInterval(typeInterval);
  }
  if (i < text.length) {
    document.getElementById(para).innerHTML += text.charAt(i);
    i++;
    speed = Math.random() * 50 + 100;
  } else {
    if (ok == 0) {
      i = 0;
    }
    ok += 1;
  }
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
typeInterval = setInterval(function () {
  if (ok == 0) {
    typeWriter(text1, "txt1");
  } else if (ok == 1) {
    typeWriter(text2, "txt2");
    // typeWriter(text3, "txt3");
  }
}, 100);
//};
