# Team TreeHouse Track_II_Practice

## Introduction to Object-Oriented JavaScript

- Video Resources By Kaleb https://drive.google.com/drive/folders/10945rxEBmkJEKbT1VrZTRVul7Ouqn1Ff

- Object Real Life Example: **House** = Object, **Properties** = Square Footage, Color, Year Built, **Methods** = Paint House, Build Pool

## Object Basics

- All about object literals, and object basics like encapsulation, properties, methods, and classes.
- Putting all of these properties and methods into a package and attaching it to a variable is called **Encapsulation**.

### Dot Notation & Bracket Notation

- Able to use Dot notation by variableName.Property E.g. dog.color / dog.bark();
- when calling a function make sure to use ()
- You could store a property name inside a variable and use bracket notation with the variable instead.This is really useful if you need to use or generate dynamic properties.

### Working with Classes in JavaScript

- Check app.js for notes

### Getters and Setters

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

## JavaScript Unit Testing

### Introducing Unit Testing

- Watch this 15 minute videos by Eugene https://www.youtube.com/watch?v=oEtGhxK39Lc&feature=emb_title
- Behavior Driven Development. Test describes the expected behavior for our application. Creating a plan before coding - Test and Psuedo Code.
- Manual testing inside the console is difficult to write effectively and too tedious.
- Mocha is used in TreeHouse, but Jest.js unit testing is framework of choice.
- End-To-End Testing when fully testing the fully application for production. Will focus on unite testing for this course.
  -Red > Green > Refactor

1. Write the tests, even though at first they’ll fail
2. Fix the function in the first way that comes to mind, just to get your tests passing
3. Go back and refactor the function for improvements, repeating the cycle until you’re ready to move on

<<<<<<< HEAD
### Iteration

- A Map data structure uses objects as keys, associating a value (of any type) with that object. Maps have a different default iteration than seen here, in that the iteration is not just over the map's values but instead its entries. An entry is a tuple (2-element array) including both a key and a value.

- We started by talking about consuming iterators, but then switched to talking about iterating over iterables. The iteration-consumption protocol expects an iterable, but the reason we can provide a direct iterator is that an iterator is just an iterable of itself! When creating an iterator instance from an existing iterator, the iterator itself is returned.

### Closure 

- Closure is when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope.

- Objects don't get closures, functions do. Second, to observe a closure, you must execute a function in a different scope than where that function was originally defined.
=======
## Ascynchronous Programming with Javascript

### What is Asyncrhonous Programming?

- Call Stack

- Callback queue & Event loop

#### Helpful Questions

- The JavaScript engine is able to keep track of the order of function calls and where it is in a program at any given moment, using a mechanism called: The Call Stack

- What is a major drawback of requesting data from a server synchronously? It makes the page completely unresponsive. The user is not able to interact with the page until the requested data is eventually returned.

- Any time the call stack is empty, the event loop pushes the first task from the callback queue onto the call stack and runs it.

-What programming model allows only one operation to run to completion at any given time? Synchronous

- ```setTimeout(() => {
    console.log("Timer's done!");
  }, 5000);
  ```

- The call back queue is a holding area for callbacks that are waiting to be put on the call stack and eventually executed.

### Asynchronous JavaScript with Callbacks

- **Callback Function**: A callback function is a function passed into another function as an argument. The function that receives the callback function is often referred to as the "parent" function. The parent function will, at some point in the future, execute or call the callback.

- **DOM Events**: Callbacks are used in both synchronous and asynchronous functions, so you might already be familiar with the concept of callbacks. For example, you use callbacks every time you listen for DOM events. The callback passed to addEventListener is an arrow function that runs JavaScript only when the user clicks a button:

```
btn.addEventListener('click', () => {
  // Perform some action on click inside this callback
  console.log('I was clicked!');
});
```

- **Iteration Methods** - Array iteration methods like `map()`, `filter()`, and `forEach()` accept a callback function that processes each item in the original array. For example, convert each item in the fruits array to uppercase:

`const capitalizedFruits = fruits.map( fruit => fruit.toUpperCase() );`

Return a new array containing only those items in the sNames array that begin with the letter 'S':

```
const sNames = names.filter( name => {
  return name.charAt(0) === 'S';
});
```

Console log each item in the fruits array: `fruits.forEach( fruit => console.log(fruit) );`

-**_ Continuation-passing style (CPS) _** - With callbacks, you can also create a chain of function calls (or a sequence of tasks) where one task runs after another is completed. This is referred to as continuation-passing style (CPS).

For example, each function takes a callback (or continuation function) as its last argument:

```
function add(x, y, callback) {
  callback(x + y)
}
function subtract(x, y, callback) {
  callback(x - y);
}
function multiply(x, y, callback) {
  callback(x * y);
}
function calculate(x, callback) {
  callback(x);
}

calculate(5, (n) => {
  add(n, 10, (n) => {
    subtract(n, 2, (n) => {
      multiply(n, 5, (n) => {
        console.log(n); // 65
      });
    });
  });
});
```

The functions get invoked and processed in a sequence. As you'll soon learn, this style of code can lead to what's referred to as "callback hell" or the "pyramid of doom", which can make your program difficult to follow and maintain.
>>>>>>> 83884498f45c5f8ff7d3664afdce3c2ed0027cf5
