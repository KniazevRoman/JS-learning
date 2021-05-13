// #2 Catch links in the element
/*
let contents = document.getElementById('contents');

contents.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() == 'a' ) {
        askUser(event.target);
    } else if (event.target.closest('a')) {
        askUser(event.target.closest('a'));
    }
})

function askUser(elem) {
    let message = `Leave for ${elem.href}?`;

    let userDescision = confirm(message);

    if (!userDescision) {
        event.preventDefault();
    }
}
*/

// #3 Image gallery

function setLargeImg(elem) {
    largeImg.src=elem.closest('a').href;
}

let largeImg = document.getElementById('largeImg');

document.body.addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'img') {
        event.preventDefault();
        setLargeImg(event.target);
    }
})