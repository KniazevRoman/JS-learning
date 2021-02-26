// #2 Array operations
/*
let styles =['Jazz', 'Blues'];

styles.push('Rock-n-Roll');

if(styles.length % 2) {
  let center = Math.ceil(styles.length/2)-1;
  styles[center] = 'Classics';
}

alert(styles.shift());

styles.unshift('Rap', 'Reggae');
*/

// #4 Sum input numbers
/*
function sumInput() {
  let values = [];

  let value = prompt("Enter the number please!", 0);
  
  while (isFinite(value) && value != null){
    values.push(+value);
    value = prompt("Enter the number please!", 0);
  } 

  let result = 0;

  for (let i = 0; i < values.length; i++) {
    result += values[i];
  }

  return result;
}
*/
