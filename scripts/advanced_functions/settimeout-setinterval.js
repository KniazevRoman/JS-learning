// #1 Output every second

// setInterval solution
/*
function printNumbers(from, to) {
    let interval = 1000;

    let currentNumber = from;

    let timerId = setInterval(() => {
        console.log(currentNumber++);

        if (currentNumber > to) {
            clearInterval(timerId);
        }
    }, interval);
}
*/

// setTimeout solution

function printNumbers(from, to) {
    let timeout = 1000;

    let currentNumber = from;

    let timerId = setTimeout(function print() {
        console.log(currentNumber++);

        if (currentNumber <= to) {
            timerId = setTimeout(print, timeout);
        }

    }, timeout);
}

printNumbers(7, 15);