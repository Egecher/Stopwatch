const stopwatch = document.getElementById("stopwatch");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let timer;
let [hours, minutes, seconds] = [0, 0, 0];

function updateDisplay() {
    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');
    stopwatch.textContent = `${h}:${m}:${s}`;
}

start.addEventListener('click', () => {
    if(!timer) {
        timer = setInterval(() => {
            seconds++;
            if(seconds === 60) {
                seconds = 0;
                minutes++
            }

            if(minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();
        }, 1000);
    }
});

stop.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

reset.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
});