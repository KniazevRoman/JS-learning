// #1 Two functions – one object
/*
let obj = {};

function A() { 
    return obj;
 }
function B() { 
    return obj;
 }

let a = new A();
let b = new B();

alert( a == b ); // true
*/

// #2 Create new Calculator

/*
function Calculator() {
    this.read = function() {
        this.number1 = +prompt("Enter the 1st number");
        this.number2 = +prompt("Enter the 2nd number");
    }

    this.sum = function() {
        return this.number1 + this.number2;
    }

    this.mul = function() {
        return this.number1 * this.number2
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

// #3 Create new Accumulator

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("Add value");
    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values