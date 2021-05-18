// #1 Improved tooltip behavior

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

function deleteToolTip() {
    let toolTips = document.querySelectorAll('.tooltip');
    for (let toolTip of toolTips) {
        toolTip.remove('tooltip');
    }
}

let isTooltipped = false;

document.body.addEventListener('mouseover', function (event) {
    if (isTooltipped) {
        deleteToolTip();
    }

    if (event.target.hasAttribute('data-tooltip')) {
        let coords = {
            'top': event.target.getBoundingClientRect().top,
            'left': event.target.getBoundingClientRect().left,
        };

        createToolTip(event.target, coords);
        isTooltipped = true;
    } else {
        let coords = {
            'top': event.target.closest('[data-tooltip]').getBoundingClientRect().top,
            'left': event.target.closest('[data-tooltip]').getBoundingClientRect().left,
        };

        createToolTip(event.target.closest('[data-tooltip]'), coords);
        isTooltipped = true;
    }
});

document.body.addEventListener('mouseout', function (event) {
    if (isTooltipped) deleteToolTip();
    isTooltipped = false;
});