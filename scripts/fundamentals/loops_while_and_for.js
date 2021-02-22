// #1 Output even numbers in the loop
//
// for (let i = 2; i <= 10; i++) {
//     if (!(i % 2)){
//         alert(i);
//     }
// }


// #2 Replace "for" with "while"
//
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

// let i = 0;
// while(i<3) {
//     alert( `number ${i}!` );
//     i++;
// }

// #3 Repeat until the input is correct

// let number = prompt('Enter the number greater than 100');
// while (number <= 100 && number) {
//     number = prompt('Please input the number again');
// }

// #4 Output prime numbers

let n = +prompt("Enter the 'n' for the prime number finder");
for (let i=2; i <= n; i++) {
    if (i == 2){
        alert(i);
        continue;
    }
    
    let prime;

    for (let j = 2; j<i; j++){
        if (i % j == 0) {
            prime = 0;
        }
    }

    if (prime !== 0) {
        alert(i);
    }

}