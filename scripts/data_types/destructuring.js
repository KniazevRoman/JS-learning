'use strict'

// #1 Destructuring assignment
/*
let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
*/

// #2 The maximal salary

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let highestPaidPerson = null;
    let highestSalary = 0;

    let people = Object.entries(salaries);

    for (let [name, salary] of people) {
        if(salary > highestSalary) {
            highestSalary = salary;
            highestPaidPerson = name;
        }
    }

    return highestPaidPerson;
}

console.log(topSalary(salaries));