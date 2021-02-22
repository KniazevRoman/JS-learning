// #1 Hello, object

/*
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
*/ 

// #2 Check for emptiness
// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

/*
function isEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true;
}
*/

// #3 Sum object properties
/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumValues (obj) {
    let sum = 0;

    for (let key in obj) {
        sum += obj[key];
    }

    return sum;
}
*/

// #4 Multiply numeric property values by 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);
console.log(menu);

function multiplyNumeric (obj) {
    for (let key in obj) {
        let type = typeof obj[key];
        if (type == "number") {
            obj[key] *= 2;
        }
    }
}

