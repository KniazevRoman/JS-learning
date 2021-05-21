// #1 Extended hotkeys

function runOnKeys (func, ...codes) {
    let pressedKeys = [];
    let shouldRun = true;

    document.addEventListener('keydown', function(event) {
        pressedKeys.push(event.code);

        shouldRun = true;
        for (let code of codes) {
            if (!pressedKeys.includes(code)) shouldRun = false;
        }
        if (shouldRun) {
            pressedKeys.length = 0;
            func();
        }
    });

    document.addEventListener('keyup', function (event) {
        for (let i = 0; i < pressedKeys.length; i++) {
            if (pressedKeys[i] === event.code) pressedKeys.splice(i, 1);
        }
    });
}

runOnKeys(() => alert("Hello!"), "KeyQ", "KeyW");