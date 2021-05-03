// #1 Create a notification

function showNotification(options) {
    let elem = document.createElement('div');
    elem.classList.add('notification');

    elem.style.position = 'absolute';
    elem.style.top = `${options.top}px`;
    elem.style.right = `${options.right}px`;
    elem.innerHTML = options.html;
    elem.classList.add(`${options.className}`);

    document.body.append(elem);
    let timerId = setTimeout(() => {
        elem.style.display = 'none';
    }, 1500);
}

// shows an element with the text "Hello" near the right-top of the window
showNotification({
    top: 10, // 10px from the top of the window (by default 0px)
    right: 10, // 10px from the right edge of the window (by default 0px)
    html: "Hello!", // the HTML of notification
    className: "welcome" // an additional class for the div (optional)
  });