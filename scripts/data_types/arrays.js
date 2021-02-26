// #2 Array operations

let styles =['Jazz', 'Blues'];

styles.push('Rock-n-Roll');

if(styles.length % 2) {
  let center = Math.ceil(styles.length/2)-1;
  styles[center] = 'Classics';
}

alert(styles.shift());

styles.unshift('Rap', 'Reggae');
console.log(styles);