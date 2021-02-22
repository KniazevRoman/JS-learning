// #2 Rewrite the function using '?' or '||'

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
// }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
// }

// checkAge(17);


// #3 Function min(a, b)

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// alert(min(12, 3));


// #4 Function pow(x,n)

// function pow(x, n) {
//     let result = x;
//     for (let i=1; i<n; i++){
//         result = result*x;
//     }
//     return result;
// }

// alert(pow(2, 6));


// #5 Rewrite with arrow functions

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

  ask("Do you agree?", () => alert("You agreed."), () => alert("You canceled the execution."));

