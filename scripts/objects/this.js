// #2 Create a calculator
/*
let calculator = {
    number1 : 0,
    number2 : 0,

    read() {
        this.number1 = prompt("Enter the 1st number");
        this.number2 = prompt("Enter the 2nd number");
    },

    sum() {
        return +this.number1 + +this.number2;
    },

    mul() {
        return this.number1 * this.number2;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
*/

  // #3 Chaining

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // shows the current step
        alert( this.step );
        return this;
    }
};


ladder.up().up().up().showStep(); // 1