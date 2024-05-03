let secondsElapsed = 0; // we need to change this value later. 
let interval = null;
const time = document.getElementById("time");


// we need to define padStart function. (we want 00:00 view)
function padStart(value) {
    return String(value).padStart(2, "0");
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}
function timer() {
    secondsElapsed++;
    setTime();

}

function startClock() {
    // we need to define interval.
    // we want only the reset button to reset the timer.
    if (interval) stopClock();
    interval = setInterval(timer, 1000);
}

function stopClock() {
    clearInterval(interval);
}

function resetClock() {
    stopClock();
    secondsElapsed = 0;
    setTime();
}