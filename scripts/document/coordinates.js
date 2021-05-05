// #1 Find window coordinates of the field
/*
document.onclick = function(e) { // shows click coordinates
    coords.innerHTML = e.clientX + ':' + e.clientY;
};

setTimeout(() => {
    let elem = document.getElementById('field');
    let elemCoords = elem.getBoundingClientRect(); 
    let answers = [];

    answers.push([elemCoords.left, elemCoords.top]);
    answers.push([elemCoords.right, elemCoords.bottom]);
    answers.push([elemCoords.left+elem.clientLeft, elemCoords.top+elem.clientTop]);
    answers.push([elemCoords.left+elem.clientLeft+elem.clientWidth, elemCoords.top+elem.clientTop+elem.clientHeight]);

    for (let answer of answers) {
        console.log(answer);
    }
}, 1000);
*/



