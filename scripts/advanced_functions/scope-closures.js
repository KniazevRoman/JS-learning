// #6 Sum with closures
/*
function sum(a) {

    return function(b) {
        return a + b;
    }
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4
*/

// #8 Filter through function
/*
function inBetween(a, b) {
    return (item) => (item >= a && item <= b); 
}

function inArray(arr) {
    return function (item) {
        for (let arrItem of arr) {
            if (item === arrItem) {
                return true;
            }
        }

        return false;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3,6))); // 3,4,5,6
console.log(arr.filter(inArray([1,2,4,10])));
*/

// #9 Sort by field
/*
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];


function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

console.log(users.sort(byField('name')));
*/

// #10 Army of functions

function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        let counter = i;

        let shooter = function() { // create a shooter function,
            alert( counter ); // that should show its number
        };
        shooters.push(shooter); // and add it to the array
        i++;
    }
  
    // ...and return the array of shooters
    return shooters;
}
  
let army = makeArmy();
  
// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.