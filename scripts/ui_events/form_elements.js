// #1 Add an option to select
// Show the value and the text of the selected option

let genres = document.getElementById('genres');

console.log(`The value is ${genres.value}`);
console.log(`The text is ${genres.options[genres.selectedIndex].textContent}`);

// Add an option: <option value="classic">Classic</option>

let classic = document.createElement('option');
classic.value = 'classic';
classic.textContent = 'Classic';

genres.append(classic);

// Make it selected

genres.value = 'classic';