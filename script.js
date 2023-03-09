var seconds = 00;
var min = 1;
var hour = 1;
var OutputSeconds = document.getElementById("sec-time");
var OutputMin = document.getElementById("min-time");
var OutputHour = document.getElementById("hour-time");
var buttonStart = document.getElementById("start");
var buttonStop = document.getElementById("stop");
var buttonReset = document.getElementById("reset");
var Interval;

buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);

});

buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
});

buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    min = 00;
    seconds = 00;
    hour = 00;
    OutputSeconds.innerHTML = seconds;
    OutputMin.innerHTML = min;
    OutputHour.innerHTML = hour;
    clearInterval(Interval);
});

function startTimer() {
    console.log(seconds)
    if (seconds > 59) {
        seconds = 0;
        if (min > 59) {
            min = 0;
            OutputHour.innerHTML = hour;
            hour++
        }

        OutputMin.innerHTML = min;
        min++

    }



    OutputSeconds.innerHTML = seconds;
    seconds++

}