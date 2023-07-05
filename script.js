var elts = document.getElementsByClassName('otp')
Array.from(elts).forEach(function (elt) {
  elt.addEventListener("keyup", function (event) {
    if (elt.value.length == 1) {
      elt.nextElementSibling.focus();
    }
  });
})

function channgingText() {
  p = document.getElementById("sent-again");
  p.innerHTML = 'Sent Again';
  p = document.getElementById('1');
  p.innerHTML = '';
  p = document.getElementById('2');
  p.innerHTML = '';
  p = document.getElementById('3');
  p.innerHTML = '';
  p = document.getElementById('count');
  p.innerHTML = '';
  p = document.getElementById('minutes');
  p.innerHTML = '';
}

function startTimer() {
  var seconds = 5,
    minutes = 0;
  p = document.getElementById("sent-again");
  p.innerHTML = '';
  p = document.getElementById('1');
  p.innerHTML = '('
  p = document.getElementById('2');
  p.innerHTML = ':'
  p = document.getElementById('3');
  p.innerHTML = ')'
  p = document.getElementById('minutes');
  p.innerHTML = '0'
  p = document.getElementById('count');
  p.innerHTML = '5'

  setInterval(function () {
    seconds = seconds - 1;
    if (seconds >= 0) {
      p = document.getElementById("count");
      p.innerHTML = seconds;
    }
    else if (seconds == -1 && minutes == 0) {
      clearInterval(seconds);
      channgingText();
    }
    else if (seconds == -1) {
      minutes--;
      p = document.getElementById("minutes");
      p.innerHTML = minutes;
      seconds = 60;
    }
  }, 1000);
};

function start() {
  document.getElementById("count");
  startTimer();
};