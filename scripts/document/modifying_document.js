// #2 Clear the element
/*
function clear(elem) { 
    elem.innerHTML = "";
}

clear(elem); // clears the list
*/

// #4 Create a list
/*
let list = document.querySelector('.list');
let content = prompt("what to add to the list?");

while(content != null && content != '') {
    let elem = document.createElement('li');
    elem.textContent = content;

    list.append(elem);

    content = prompt("what to add to the list?");
}
*/

// #5 Create a tree from the object
/*
let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
};

let container = document.getElementById('container');
createTree(container, data);



function createUl(obj, root) {
  let ul = document.createElement('ul'); // make a list

  for (let [key, value] of Object.entries(obj)) {
    let li = document.createElement('li'); // make a list item
    li.append(key); // fill the list item
    ul.append(li); // append the list item to the list
    
    // go deeper
    if (Object.keys(value).length > 0) {
      let root = li; // re-assign the root to insert new ul into the previous li
      createUl(value, root)
    }
  }

  root.append(ul); // append the list to the root
}

function createTree(container, data) {
  let root = container;

  createUl(data, root);
}
*/

// #6 Show descendants in a tree
/*
let allLi = document.querySelectorAll('li');

for (let li of allLi) {
  if(li.querySelectorAll('li').length > 0) {
    let ul = li.querySelector('ul');
    ul.before(`[${li.querySelectorAll('li').length}]`);
  }
}
*/

// #7 Create a calendar
/*
function createCalendar(elem, year, month) {
  month--;

  let weekDays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  let table = document.createElement('table');
  let topTr = document.createElement('tr');

  for (let i = 0; i < 7; i++) {
    let th = document.createElement('th');
    th.textContent = weekDays[i];
    topTr.append(th);
  }

  table.append(topTr);

  addWeek(table);
  let currentWeek = 1;

  for (let day = 1; day <= getLastDayOfMonth(year, month); day++) {
    let date = new Date(year, month, day);
    if (date.getDay() == 0) {
      table.querySelector(`tr:nth-child(${1+currentWeek}) td:nth-child(${7})`).append(day);
      if (day != getLastDayOfMonth(year, month)) {
        currentWeek++;
        addWeek(table);
      }
    } else {
      table.querySelector(`tr:nth-child(${1+currentWeek}) td:nth-child(${date.getDay()})`).append(day);
    }
    
  }

  elem.append(table);
}

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month+1);
  date.setDate(date.getDate()-1);
  return date.getDate();
}

function addWeek(root) {
  let tr = document.createElement('tr');
  for (let i = 0; i < 7; i++) {
    let td = document.createElement('td');
    tr.append(td);
  }

  root.append(tr);
}

createCalendar(container, 2012, 9);
*/

// #8 Create clock with setInterval
/*
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let timerId = setInterval(() => {
  hours.textContent = new Date(Date.now()).getHours();
  minutes.textContent = new Date(Date.now()).getMinutes();
  seconds.textContent = new Date(Date.now()).getSeconds();
}, 1000);
*/

// #9 Insert the HTML in the list
/*
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');
*/

// #10 Sort the table

function compare(a, b) {
  if (a[0] > b[0]) return 1;
  if (a[0] == b[0]) return 0;
  if (a[0] < b[0]) return -1;
}

let trs = document.querySelectorAll('tbody tr');

let people = [];

for (let tr of trs) {
  let tds = tr.querySelectorAll('td');

  let person = [];

  for (let td of tds) {
    person.push(td.textContent);
  }

  people.push(person);
}

people.sort(compare);

for (let i = 0; i < people.length; i++) {
  let tr = document.querySelector(`tbody tr:nth-child(${i+1})`);

  for (let j = 0; j < people[i].length; j++) {
    let td = tr.querySelector(`td:nth-child(${j+1})`);
    td.textContent = people[i][j];
  }
}