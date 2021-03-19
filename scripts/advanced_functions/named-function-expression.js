// #1 Set and decrease for counter
/*
function makeCounter() {
  
    function counter() {
      return counter.count++;
    };
  
    counter.count = 0;

    counter.set = function (value){
        return counter.count = value;
    }

    counter.decrease = function () {
        return counter.count--;
    }
  
    return counter;
}
  
let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1
*/

// #2 Sum with an arbitrary amount of brackets

function sum(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  }


console.log(sum(1)(2)); // 1 + 2
console.log(sum(1)(2)(3)); // 1 + 2 + 3
