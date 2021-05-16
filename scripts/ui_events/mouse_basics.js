// #1 Selectable list

let ul = document.getElementById('ul');

ul.addEventListener('click', function(event) {
    if (event.target.tagName == 'LI') {
        if (event.altKey || event.metaKey) {
            event.target.classList.add('selected');
            selectedItems.push(event.target);
        } else {
            let selectedItems = document.querySelectorAll('.selected');
            for (let item of selectedItems) {
                if (item.classList.contains('selected')) item.classList.remove('selected');
            }
            event.target.classList.add('selected');
            selectedItems.push(event.target);
        }
    }
});