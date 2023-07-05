var elts = document.getElementsByClassName('otp')
Array.from(elts).forEach(function(elt){
  elt.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (elt.value.length == 1) {
      // Focus on the next sibling
      elt.nextElementSibling.focus()
    }
  });
})

function startTimer(){
  var seconds = 0,
      minutes = 1;
  setInterval(function() {
    seconds--;
    if (seconds >= 0) {
      p = document.getElementById("count");
      p.innerHTML = seconds;
    }

    if (seconds == -1 && minutes == 0) {
        alert('sorry, out of time');
        clearInterval(seconds);
    }
    else if (seconds == -1) {
      minutes--;
      p = document.getElementById("minutes");
      p.innerHTML = minutes;
      seconds = 60;
    }
  }, 1000);
}
function start()
{
    document.getElementById("count");
    startTimer();
};