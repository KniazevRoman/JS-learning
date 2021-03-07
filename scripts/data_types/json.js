// #1 Turn the object into JSON and back
/*
let user = {
    name: "John Smith",
    age: 35
};

let userString = JSON.stringify(user);
let newUser = JSON.parse(userString);
*/

// #2 Exclude backreferences

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  // circular references
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    return (value == meetup && key != "") ? undefined : value;
  }));
  
  /* result should be:
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */