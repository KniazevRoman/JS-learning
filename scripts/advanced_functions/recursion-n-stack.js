// #1 Sum all numbers till the given one

// 'For' solution
/*
function sumTo(n) {
    let result = 0;

    for(n; n > 0; n--) {
        result += n;
    }

    return result;
}
*/

// 'Recursion' solution
/*
function sumTo(n) {
    if (n == 1) {
        return n;
    } else {
        return n + sumTo(n-1);
    }
}
*/

// 'Arithmetic progression' solution
/*
function sumTo(n) {
    return n*(1+n)/2;
}

console.log(sumTo(1)); // = 1
console.log(sumTo(2)); // = 2 + 1 = 3
console.log(sumTo(3)); // = 3 + 2 + 1 = 6
console.log(sumTo(4)); // = 4 + 3 + 2 + 1 = 10
console.log(sumTo(100)); // 5050
*/

// #2 Calculate factorial
/*
function factorial(n) {
    return (n == 1) ?  n : (n * factorial(n-1));
}

console.log(factorial(4));
*/

// #3 Fibonacci numbers

/*
function fib(n) {
    let fib = [1, 1];

    for(n; n > 2; n--) {
        fib.push(fib[fib.length-1]+fib[fib.length-2]);
    }
    
    return fib.pop();
}

console.log(fib(7));
console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757
*/

// #4 Output a single-linked list
/*
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

// Loop solution
/*
function printList(list) {
    let result = [];

    let base = list;


    while (typeof base.next === 'object' && base.next !== null) {
        result.push(base.value);
        base = base.next;   
    }

    return result;
}
*/

// Recursion solution
/*
function printList(list) {
    alert (list.value);

    if(list.next !== null) {
        printList(list.next);
    }
}

printList(list);
*/

// #5 Output a single-linked list in the reverse order
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};
// Loop solution
/*
function printListReverse(list) {
    let result = [];
    let base = list;
    
    while (typeof base.next === 'object' && base.next !== null) {
        result.unshift(base.value);
        base = base.next;   
    }
    
    return result;

}

console.log(printListReverse(list));
*/

// Recursion solution

function printListReverse(list) {
    let result = [];
    result.push(list.value);

    if(list.next !== null) {
        printListReverse(list.next);
    }

    for(item of result) {
        alert(item);
    }
}

printListReverse(list);