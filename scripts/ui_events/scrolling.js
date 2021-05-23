// #1 Endless page
/*
let content = document.querySelector('.content');

while (content.clientHeight < document.documentElement.clientHeight) {
    addNewRow();
}

document.addEventListener('scroll', function () {
    if (window.pageYOffset + document.documentElement.clientHeight + 100 > content.clientHeight) {
        addNewRow();
    }
});

function addNewRow() {
    let newRow = document.createElement('div');
    newRow.textContent = 'NewRow';
    content.append(newRow);
}
*/

// #2 Up/down button
/*
let arrowTop = document.getElementById('arrowTop');

document.addEventListener('scroll', function (){
    arrowTop.style.display = 'none';

    if (window.pageYOffset > document.documentElement.clientHeight) {
        arrowTop.style.display = 'block';
    }
});

arrowTop.addEventListener('click', function() {
    window.scrollTo(0, 0);
});
*/ 

// #3 Load visible images

/**
 * Tests if the element is visible (within the visible part of the page)
 * It's enough that the top or bottom edge of the element are visible
 */
function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;

    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;
}

function showVisible() {
    for (let img of document.querySelectorAll('img')) {
        let realSrc = img.dataset.src;
        if (!realSrc) continue;

        if (isVisible(img)) {
        // disable caching
        // this line should be removed in production code
        realSrc += '?nocache=' + Math.random();

        img.src = realSrc;

        img.dataset.src = '';
        }
    }
}

window.addEventListener('scroll', showVisible);
showVisible();