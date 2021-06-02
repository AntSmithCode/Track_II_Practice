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

### Iteration

- A Map data structure uses objects as keys, associating a value (of any type) with that object. Maps have a different default iteration than seen here, in that the iteration is not just over the map's values but instead its entries. An entry is a tuple (2-element array) including both a key and a value.

- We started by talking about consuming iterators, but then switched to talking about iterating over iterables. The iteration-consumption protocol expects an iterable, but the reason we can provide a direct iterator is that an iterator is just an iterable of itself! When creating an iterator instance from an existing iterator, the iterator itself is returned.

### Closure 

- Closure is when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope.

- Objects don't get closures, functions do. Second, to observe a closure, you must execute a function in a different scope than where that function was originally defined.