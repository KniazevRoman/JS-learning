// #4 Move the ball across the field
/*
let field = document.getElementById('field');
let ball = document.getElementById('ball');

let fieldCoords = field.getBoundingClientRect();

function moveBall(event) {
    let minLeftCoord = 0;
    let minTopCoord = 0;
    let maxLeftCoord = field.clientWidth - ball.offsetWidth;
    let maxTopCoord = field.clientHeight - ball.offsetHeight;

    let leftCoord = event.clientX-fieldCoords.left-field.offsetLeft-ball.offsetWidth/2+window.scrollX;
    let topCoord = event.clientY-fieldCoords.top-field.offsetTop-ball.offsetHeight/2+window.scrollY;

    if (leftCoord < minLeftCoord) {
        ball.style.left = `${minLeftCoord}px`;
    } else if (leftCoord > maxLeftCoord){
        ball.style.left = `${maxLeftCoord}px`;
    } else {
        ball.style.left = `${leftCoord}px`
    }   

    if (topCoord < minTopCoord) {
        ball.style.top = `${minTopCoord}px`;
    } else if(topCoord > maxTopCoord){
        ball.style.top = `${maxTopCoord}px`;
    } else {
        ball.style.top = `${topCoord}px`;
    }
}

field.addEventListener("click", moveBall);
*/

// #5 Create a sliding menu
/*
let listLabel = document.querySelector('.list-label');

let arrowLeft = document.querySelector('.arrow-left');
let arrowBottom = document.querySelector('.arrow-bottom');
let list = document.querySelector('.list');

listLabel.addEventListener('click', () => {
    arrowLeft.classList.toggle('hidden');
    arrowBottom.classList.toggle('hidden');
    list.classList.toggle('hidden');
});
*/

// #6 Add a closing button
/*
let articles = document.querySelectorAll('.pane');

for (let article of articles) {
    let button = document.createElement('button');
    button.classList.add('remove-button');
    button.textContent = '[x]';

    button.addEventListener('click', ()=> {
        article.style.display = 'none';
    })

    article.append(button);
}
*/

let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let carousel = document.querySelector('.inner-container');

leftArrow.addEventListener('click', ()=> {
    carousel.scrollLeft -= 390;
});

rightArrow.addEventListener('click', ()=> {
    carousel.scrollLeft += 390;
});