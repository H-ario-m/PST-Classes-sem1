
// Problem 1: Function Expression
// Write a function expression called calculateArea that takes two parameters: length and width. It should return the area of a rectangle. Test the function with different values.




const calculateArea = function(length, width) {
    return length * width;
  };
  
  console.log(calculateArea(5, 10)); 
  console.log(calculateArea(3, 7));











//   Problem 2: Arrow Function
//   Write an arrow function called calculatePerimeter that takes two parameters, length and width, and returns the perimeter of a rectangle.




  const calculatePerimeter = (length, width) => 2 * (length + width);

  
  console.log(calculatePerimeter(5, 10)); 












//   Problem 3: Arrow Function and this Context
//   Create an object person with a property name and a method greet that uses an arrow function. The arrow function should return a greeting using the name property of the object.

  const person = {
    name:"johnny",
    greet: () =>`Hello, ${person.name}!`
  };
  
  console.log(person.greet());
  











//   Problem 4: Arrow Function for Array Manipulation
//   Write an arrow function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers



  const filterEvenNumbers = (arr) => {
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      }
    }
    return evenNumbers;
  };
  
  console.log(filterEvenNumbers([1, 2, 3,8, 4, 5, 6])); 









  
// Problem 5: Default Parameters in Functions
// Write a function greet that accepts two parameters: name and greeting. The greeting parameter should have a default value of "Hello". If no greeting is provided, the function should return "Hello, [name]".


  function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
  }
  
  console.log(greet("Alice"));
  console.log(greet("Bob", "Hi there")); 

  




























//   Problem 6: Function vs Arrow Function with this
//   Write two methods inside an object car. One method should be a regular function, and the other should be an arrow function. The regular function should correctly access the object?s model property using this, while the arrow function should demonstrate the inability to use this.


  const car = {
    model: 'Toyota',
    regularFunction: function() {
      return `The car model is ${this.model}.`;
    },
    arrowFunction: () => {
      return `The car model is ${this.model}.`; 
    }
  };
  
  console.log(car.regularFunction()); 
  console.log(car.arrowFunction()); 

