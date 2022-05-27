const timer = document.getElementById('stopwatch');
const round = document.getElementById('round');

var audio= new Audio('./001.mp3');
let btn = document.getElementById("ado");


var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
var time=3;
var time2=4;
var nb_round=0;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

       
          if(min==time){
            audio.play();
            // btn.style.display="block";
            // round.style.top="20%";
            time2=(time+1)%60;
            time=time-1;
           nb_round++;
          }
      if(min==time2){
            audio.play();
            // btn.style.display="block";
            // round.style.top="20%";
            time=(time2+3)%60;
            time2=time2-1;
          }
 
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    round.innerHTML = '-' + nb_round + '-';
    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);

 
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
}
function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}

// function stopAudio(){
//       audio.pause();
//        btn.style.display="none";
//        round.style.top="30%"
//       }

