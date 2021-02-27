// #1 Translate border-left-width to borderLeftWidth
/*
function camelize(str) {
    let arr = str.split('-');
    for (let i = 0; i < arr.length; i++) {
        if (i>0) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        }
    }
    
    let result = arr.join('');
    return result;
}

camelize("grid-column-start");
*/

// #2 Filter range
/*
function filterRange(arr, a, b) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            result.push(arr[i]);
        }
    }
    return result;
}
*/

// #3 Filter range "in place"
/*
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [1,3,5,7,9,11,13];
filterRangeInPlace(arr, 3, 14);
console.log(arr);
*/

// #4 Sort in decreasing order
/*
function decreasingSort(arr) {
    arr.sort((a,b  ) => b - a);
}
*/ 

// #5 Copy and sort array
/*
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let result = [];

    for (let item of arr) {
        result.push(item);
    }

    return result.sort();
}

let sorted = copySorted(arr);

alert( sorted );
alert( arr );

*/

// #6 Create an extendable calculator
/*
function Calculator() {
    this.operators = [
        {
            action: (a, b) => a+b,
            symbol: '+'
        },
        {
            action: (a, b) => a-b,
            symbol: '-'
        },
    ];

    this.calculate = function(str) {
        let arr = str.split(' ');
        let a = +arr[0];
        let operator = arr[1];
        let b = +arr[2];

        for (let i=0; i < this.operators.length; i++) {
            if (operator == this.operators[i].symbol) {
                return this.operators[i].action(a, b);
            }
        }
    }

    this.addMethod = function(name, func) {
        this.operators.push(
            {
                symbol: name,
                action: func
            }
        )
    }

}

let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);


let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
*/

// #7 Map to names
/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert(names);
*/

// #8 Map to objects
/*
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(item => {
    return {fullName: item.name + ' '+ item.surname, id: item.id} 
});

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
*/

// #9 Sort users by age
/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

function sortByAge(arr) {
    arr.sort((a ,b) => a.age-b.age);
}

alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
*/

// #11 Get average age
/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) );

function getAverageAge(users) {
    let agesSum = 0;
    for (let i = 0; i < users.length; i++) {
        agesSum += users[i].age;
    }

    return agesSum / users.length;  
}
*/

// #12 Filter unique array members
/*
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) );

function unique(arr) {
    let values = [];

    for (let i = 0; i < arr.length; i++) {
        if (!(values.includes(arr[i]))) {
            values.push(arr[i]);
        } 
    }

    return values;
}
*/

// #13 Create keyed object from array

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];
  
let usersById = groupById(users);
  
function groupById (arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        result[arr[i].id] = arr[i];
    }

    return result;
}

/*
// after the call we should have:
  
usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/