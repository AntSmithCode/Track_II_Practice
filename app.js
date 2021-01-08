const simba = {
  //encapsulation
  animal: "lion",
  color: "Black",
  age: 3,
  roar: function () {
    console.log("ROARRRRRR!");
  },
};

const fruits = ["apple", "pear", "strawberry"];
fruitsLength = fruits.length;

//Dot notation

console.log(simba.age);
simba.roar();

//Bracket notation

console.log(simba["age"]);
console.log(simba["color"]);
simba["roar"]();

//Bracket notation flexibility
var prop = "color";
simba[prop];

// JSON
var data = {
  "First Name": "John",
  "Last Name": "Doe",
};

// To access the first name or last name properties of this JSON data, you would use bracket notation:

var first = data["First Name"];
var last = data["Last Name"];

//Inside the play method, write an empty if statement that checks if it's the players turn. Use dot notation.

const player1 = {
  name: "Ashley",
  color: "purple",
  isTurn: true,
  play: function () {
    if (this.isTurn) {
      return this.name + " is now playing!";
    }
  },
};

simba.age = 5;
simba["age"] = 9;

simba.color = purple;
simba.attack = function slash() {}; // dot notation add a new method or
