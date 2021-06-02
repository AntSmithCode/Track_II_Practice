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

class Student {
  // Adding Properties inside the Constructor Method
  constructor(gpa, credits) {
    this.gpa = gpa;
    this.credits = credits;
  }

  stringGPA() {
    return this.gpa.toString();
  }

  get level() {
    if (this.credits > 90) {
      return "Senior";
    } else if (this.credits > 60) {
      return "Junior";
    } else if (this.credits > 30) {
      return "Sophomore";
    } else {
      return "Freshman";
    }
  }
  set major(major) {
    if (this.level === "Senior" || this.level === "Junior") {
      this._major = major;
      return this._major;
    } else {
      this._major = "none";
      return this._major;
    }
  }
}

var student = new Student(3.9, 60);

// an array is an iterable
var arr = [ 10, 20, 30 ];

for (let val of arr) {
    console.log(`Array value: ${ val }`);
}

// Since arrays are iterables, we can shallow-copy an array using iterator consumption via the ... spread operator:
var arrSpread = [...arr];

//We can also iterate the characters in a string one at a time
var message = "Work Hard!";
var chars = [...message];

//  ["W", "o", "r", "k", " ", "H", "a", "r", "d", "!" ]


