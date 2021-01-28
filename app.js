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

//Promise
const astrosUrl = "http://api.open-notify.org/astros.json";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const peopleList = document.getElementById("people");
const btn = document.querySelector("button");

function getProfiles(json) {
  const profiles = json.people.map((person) => {
    const craft = person.craft;
    return fetch(wikiUrl + person.name)
      .then((response) => response.json())
      .then((profile) => {
        return { ...profile, craft };
      })
      .catch((err) => console.log("Error Fetching Wiki: ", err));
  });
  return Promise.all(profiles);
}

function generateHTML(data) {
  data.map((person) => {
    const section = document.createElement("section");
    peopleList.appendChild(section);
    section.innerHTML = `
      <img src=${person.thumbnail.source}>
      <span>${person.craft}</span>
      <h2>${person.title}</h2>
      <p>${person.description}</p>
      <p>${person.extract}</p>
    `;
  });
}

btn.addEventListener("click", (event) => {
  event.target.textContent = "Loading...";

  fetch(astrosUrl)
    .then((response) => response.json())
    .then(getProfiles)
    .then(generateHTML)
    .catch((err) => {
      peopleList.innerHTML = "<h3>Something went wrong!</h3>";
      console.log(err);
    })
    .finally(() => event.target.remove());
});
