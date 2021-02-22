let login = prompt("Enter your login please", "");

if (login === "Admin") {
  let password = prompt("Enter the password please", "");
  if (password === "TheMaster") {
    alert("Welcome!");
  }
  else if (password === "" || password === null) {
    alert("Canceled");
  }
  else {
    alert("I don't know you");
  }
}
else if (login === "" || login === null) {
  alert("Canceled");
}
else {
  alert("I don't know you");
}