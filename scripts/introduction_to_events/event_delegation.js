// #1 Hide messages with delegation
/*
function hideMessage(elem) {
    elem.style.display = 'none';
}

let container = document.getElementById('container');

container.addEventListener('click', function (event) {
    if (!event.target.classList.contains('remove-button')) {
        return;
    }
    hideMessage(event.target.closest('.pane'));
})
*/

// #2 Tree menu
/*
function hideChildren(elem) {
    for (let child of elem.children) {
        if(!child.classList.contains('tree-item')) {
            child.classList.toggle('hidden');
        }
    }
}

let tree = document.getElementById('tree');

tree.addEventListener('click', function (event) {
    
    if(event.target.classList.contains('tree-item')) {
        hideChildren(event.target.closest('li'));
    }
});
*/

// #4 Tooltip behavior

function createToolTip(elem, coords) {
    let toolTip = document.createElement('div');
    toolTip.classList.add('tooltip');
    toolTip.innerHTML = elem.dataset.tooltip;
    elem.append(toolTip);
    toolTip.style.left = `${coords.left}px`;

    if(coords.top-toolTip.getBoundingClientRect().height-5 < 0) {
        toolTip.style.top = `${coords.top+elem.getBoundingClientRect().height+5}px`;
    } else {
        toolTip.style.top = `${coords.top-toolTip.getBoundingClientRect().height-5}px`;
    }
}

function deleteToolTip(elem) {
    let toolTip = elem.querySelector('.tooltip');
    toolTip.remove();
}

document.body.addEventListener('mouseover', function (event) {
    if (event.target.tagName.toLowerCase() == 'button') {
        let coords = {
            'top': event.target.getBoundingClientRect().top,
            'left': event.target.getBoundingClientRect().left,
        };
        createToolTip(event.target, coords);
    };
});

document.body.addEventListener('mouseout', function (event) {
    if (event.target.tagName.toLowerCase() == 'button') {
        deleteToolTip(event.target);
    };
});