// #1 Filter unique array members
/*
function unique(arr) {
    let noDupl = new Set();

    for (let item of arr) {
        noDupl.add(item);
    }

    let result = [];

    for (let value of noDupl) {
        result.push(value);
    }

    return result;
}
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
alert( unique(values) ); // Hare, Krishna, :-O

*/

// #3 Iterable keys
/*
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
*/

// #2 Filter anagrams

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(words) {
    let letters = new Map();

    for (let word of words) {
        let wordArr = word.split("");
        letters.set(wordCounter(wordArr), word);
    }

    return Array.from(letters.values());
}

function wordCounter (arr) {
    let map = new Map();

    arr.sort();

    for (let word of arr) {
        if(!(map.has(word))) {
            map.set(word.toLowerCase(), 1);
        } else {
            map.set(word.toLowerCase(), map.get(word.toLowerCase())+1);
        }
    }

    let result = '';

    for (let entry of map) {
        result += entry;
    }

    return result;
}

console.log(aclean(arr));