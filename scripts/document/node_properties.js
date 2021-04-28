// #1 Count descendants

let allLi = document.querySelectorAll('li');

for (let li of allLi) {
    let descendants = li.getElementsByTagName('li').length;
    alert(li.firstChild.textContent);

    alert(`There are ${descendants} descendants`);
}