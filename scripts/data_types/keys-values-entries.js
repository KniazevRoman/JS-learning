// #1 Sum the properties
/*
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
alert( sumSalaries(salaries) ); // 650

function sumSalaries (salaries) {
    let result = 0;

    for (let salary of Object.values(salaries)) {
        result += salary;
    }

    return result;
}
*/

// #2 Count properties
let user = {
    name: 'John',
    age: 30
};
  
alert( count(user) ); // 2

function count(obj) {
    return Object.entries(obj).length;
}