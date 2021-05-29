// #1 Editable div
/*
let view = document.getElementById('view');
view.tabIndex = 0;

let content = '';

view.addEventListener('focus', function() {
    let edit = document.createElement('textarea');
    edit.classList.add('edit');
    edit.textContent = content;

    view.before(edit);
    edit.focus();
    view.style.display = 'none';

    edit.addEventListener('keyup', function(event) {
        if (event.key == 'Enter') edit.blur();
    });

    edit.addEventListener('blur', function() {
        content = edit.textContent;
        view.textContent = content;

        edit.style.display = 'none';
        view.style.display = 'block';
    });
});
*/

// #2 Edit TD on click
/*
let bagua = document.getElementById('bagua-table');

bagua.addEventListener('focusin', function(event) {
    if (event.target.tagName.toLowerCase() != 'textarea' && event.target.tagName.toLowerCase() != 'button') {
        for(let td of document.getElementsByTagName('td')) {
            td.removeAttribute('tabindex');
        }
    
        let cell = event.target.closest('td');
        cell.style.padding = 0;

        let cellContent = cell.innerHTML;
        
        let area = document.createElement('textarea');
        area.style.height = cell.clientHeight + 'px';
        area.textContent = cellContent;
    
        let controls = document.createElement('div');
        controls.style.position = 'absolute';
        controls.style.bottom = 0 + 'px';
    
        let okButton = document.createElement('button');
        okButton.innerHTML = 'OK';
        okButton.addEventListener('click', function() {
            cell.innerHTML = area.value;
            for(let td of document.getElementsByTagName('td')) {
                td.tabIndex = 0;
            }
        });
        controls.append(okButton);
    
        let cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'CANCEL';
        cancelButton.addEventListener('click', function() {
            cell.innerHTML = cellContent;
            for(let td of document.getElementsByTagName('td')) {
                td.tabIndex = 0;
            }
        });
        controls.append(cancelButton);
        
        cell.innerHTML = '';
        cell.append(area);
        cell.append(controls);
    }
});
*/

// #3 Keyboard-driven mouse

let mouse = document.getElementById('mouse');
mouse.tabIndex = 0;

let elementShift = {
    left: 0,
    top: 0,
};

mouse.addEventListener('focusin', function(event) {
    event.target.addEventListener('keyup', moveElement(event));
});

function moveElement(event) {
    event.target.addEventListener('keyup', function(event) {
        switch (event.key) {
            case 'ArrowUp': 
                elementShift.top -= 30;
                event.target.style.transform = `translate(${elementShift.left}px, ${elementShift.top}px)`;
                break;
            case 'ArrowDown':
                elementShift.top += 30;
                event.target.style.transform = `translate(${elementShift.left}px, ${elementShift.top}px)`;
                break;
            case 'ArrowRight':
                elementShift.left += 30;
                event.target.style.transform = `translate(${elementShift.left}px, ${elementShift.top}px)`;
                break;
            case 'ArrowLeft':
                elementShift.left -= 30;
                event.target.style.transform = `translate(${elementShift.left}px, ${elementShift.top}px)`;
                break;
        }
    });
}