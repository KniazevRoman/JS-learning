// #1 What's the scroll from the bottom?
/*
function getScrollBottom(elem) {
    return elem.scrollHeight-elem.clientHeight-elem.scrollTop;
}

let elem = document.querySelector('.element');
console.log(getScrollBottom(elem));
*/

// #2 What is the scrollbar width?
/*
let elem = document.querySelector('.element');
elem.style.border = '';

let scrollBarWidth = elem.offsetWidth-elem.clientWidth;

console.log(scrollBarWidth);
*/

// #3 Place the ball in the field center

let timerId = setTimeout(() => {
    let topCoordinate = field.clientHeight/2-ball.offsetHeight/2;
    let leftCoordinate = field.clientWidth/2-ball.offsetWidth/2;
    
    ball.style.top = `${topCoordinate}px`;
    ball.style.left = `${leftCoordinate}px`;
}, 1000);