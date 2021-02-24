// #1 Sum numbers from the visitor
/*
function sum() {
    let number1 = +prompt("Enter the 1st number", 0);
    let number2 = +prompt("Enter the 2nd number", 0);

    alert(`The sum of 2 numbers is ${number1 + number2}`);
}

sum();
*/

// #2 Why 6.35.toFixed(1) == 6.3?
/*
let num = 6.35;
num = Math.round(num*10)/10;
console.log(num);
*/

// #3 Repeat until the input is a number
/*
function readNumber() {
    let num = prompt("Enter the number");

    while (!isFinite(+num)) {
        num = prompt("Enter the number");
    }

    if (num == null || num =='') {
        return null;
    }

    return +num;
}
*/


// #5 A random number from min to max

/*
function random(min, max) {
    return min + Math.random() * (max - min);
}

alert( random(15, 40) );
*/

// #6 A random integer from min to max

function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

