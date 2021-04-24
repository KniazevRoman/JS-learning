// #1 Spy decorator
/*
function work(a, b) {
    alert( a + b ); // work is an arbitrary function or method
}


function spy(func) {

    function wrapper(...args) {
        let currentArgs = [];

        for (let arg of args) {
            currentArgs.push(arg);
        }

        let result = func.call(this, ...args);
        wrapper.calls.push(currentArgs);

        return result;
    }

    wrapper.calls = [];

    return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9



for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
*/

// #2 Delaying decorator
/*
function delay(f, ms) {
    return function() {
        setTimeout(() => {
            let result = f.call(this, ...arguments);
            return result;
        }, ms);
    }
}

function f(x) {
    alert(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f3000 = delay(f, 3000);

f1000("test"); // shows "test" after 1000ms
f3000("test"); // shows "test" after 1500ms
*/

// #3 Debounce decorator
/*
function debounce(f, ms) {
    let timerId;

    return function() {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            let result = f.call(this, ...arguments);
            return result;
        }, ms);
    }
}

function f(x) {
    console.log(x);
}

let f5000 = debounce(f, 3000);

f5000('a');

setTimeout(() => {
    f5000('b');
}, 1000);

setTimeout(() => {
    f5000('c');
}, 2000);
*/

// #4 Throttle decorator

function throttle(f, ms) {
    let onCoolDown = false;
    let lastCall;

    setInterval(() => {
        onCoolDown = false;

        if (lastCall) {
            let result = f.apply(this, lastCall);
            lastCall = false;
            onCoolDown = true;
            return result;
        }
        
    }, ms);

    return function() {
        if (!onCoolDown) {
            let result = f.apply(this, arguments);
            onCoolDown = true;
            return result;
        }

        lastCall = arguments;
    }
}

function f(a) {
    console.log(a);
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored