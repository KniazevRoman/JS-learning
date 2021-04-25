// #3 Select all diagonal cells


let rows = document.body.firstElementChild.firstElementChild.children;

for (let i = 0; i < rows.length; i++) {
    rows[i].children[i].style.backgroundColor = 'red';
}
