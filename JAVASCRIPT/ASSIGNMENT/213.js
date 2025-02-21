// function manipulateStudent(student) {
//     // Calculate the average grade
//     let totalGrades = 0;
//     for (let i = 0; i < student.grades.length; i++) {
//         totalGrades += student.grades[i];
//     }
//     let averageGrade = totalGrades / student.grades.length;

//     // Add the new property 'averageGrade' to the original object
//     student.averageGrade = averageGrade;

//     // Deep clone the original object using JSON
//     let studentCopy = JSON.parse(JSON.stringify(student));

//     // Remove the 'grades' property from the copied object
//     delete studentCopy.grades;

//     // Return both the modified original and the cloned copy
//     return [student, studentCopy];
// }

// // Example usage:
// let student = {
//     name: "John",
//     age: 20,
//     grades: [85, 90, 78, 92]
// };

// let result = manipulateStudent(student);
// console.log(result);

// /* Output:
// [
//     { name: 'John', age: 20, grades: [ 85, 90, 78, 92 ], averageGrade: 86.25 },
//     { name: 'John', age: 20, averageGrade: 86.25 }
// ]
// */






// Constructor function to create 'Book' objects
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Library array to store books
const library = [];

// Function to add a book to the library
function addBook(book) {
    library.push(book);
}

// Function to list all books in the library using a 'for...of' loop
function listBooks() {
    console.log("Listing original books:");
    let index = 1;
    for (let book of library) {
        console.log(`book ${index}: ${book.title}, by ${book.author}, published in ${book.year}`);
        index++;
    }
}

// Test case: Add books to the library
addBook(new Book("1984", "George Orwell", 1949));
addBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937));
addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960));

// Clone a book using Object.assign() and modify the clone
const clonedBook = Object.assign({}, library[1]); // Clone the second book (The Hobbit)
clonedBook.title = "The Lord of the Rings"; // Modify the clone

// Display original books
listBooks();

// Display the cloned and modified book
console.log("Cloned and modified book:");
console.log(`${clonedBook.title}, by ${clonedBook.author}, published in ${clonedBook.year}`);
