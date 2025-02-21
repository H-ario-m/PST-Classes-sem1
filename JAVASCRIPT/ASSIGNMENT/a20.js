
// Question 1: Filter even numbers
const numbers = [2, 4, 6, 9,7,8, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); 


// Question 2: Mapping Grades
const students = [
  { name: "Alice", score: 88 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 75 },
  { name: "David", score: 64 }
];

const gradedStudents = students.map(student => {
  let grade;
  if (student.score >= 90) {
    grade = "A";
  } else if (student.score >= 80) {
    grade = "B";
  } else if (student.score >= 70) {
    grade = "C";
  } else {
    grade = "D";
  }
  return { name:student.name, grade: grade };
});

console.log(gradedStudents); 




// Question 3: Reducing Inventory Value
const products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 600 },
  { name: "Tablet", price: 300 }
];

const totalValue = products.reduce((acc, curr) => acc + curr.price, 0);

console.log(totalValue); 

// Question 4: Testing Array Elements with every and some Functions
const ages = [2,4,6,7,3,2];

const allAbove18 = ages.every(age => age >= 18);
console.log(allAbove18);

const atLeastOneAbove18 = ages.some(age => age >= 18);
console.log(atLeastOneAbove18);

