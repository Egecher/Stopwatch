const stopwatch = document.getElementById("stopwatch");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let timer;
let [hours, minutes, seconds, splitSecond] = [0, 0, 0, 0];

function updateDisplay() {
    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');
    let ss = String(splitSecond).padStart(2, '0');
    stopwatch.textContent = `${h}:${m}:${s}:${ss}`;
}

start.addEventListener('click', () => {
    if(!timer) {
        timer = setInterval(() => {
            splitSecond++;
            if(splitSecond === 100) {
                splitSecond = 0;
                seconds++;
            }

            if(seconds === 60) {
                seconds = 0;
                minutes++
            }

            if(minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();
        }, 10);
    }
});

stop.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

reset.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    [hours, minutes, seconds, splitSecond] = [0, 0, 0, 0];
    updateDisplay();
});