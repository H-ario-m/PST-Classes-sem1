/*Topic : miscellaneous assignment
Question 1: Book Library
You are developing a digital library system to manage books. Each book has a title, author, and year of publication. You want to create a library that can add books, list them, and clone books for editing without altering the original copy.


Create a constructor function to create 'Book' objects with properties: 'title', 'author', and 'year'.

Implement a function 'addBook' to add a book to the library (an array of books).

Implement a function 'listBooks' that lists all books in the library, using a 'for...of' loop.

Use the 'Object.assign()' method to create a clone of a book object, allowing changes to be made without affecting the original.

Test the functions by adding at least 3 books, cloning one, and listing all books.


Sample template:
// Constructor function to create 'Book' objects

function Book(title, author, year) {

// your code

}

// Library array to store books

const library = [];

// Function to add a book to the library

function addBook(book) {

// code here

}

// Function to list all books in the library using a 'for...of' loop

function listBooks() {

// code here

}

// Test case: Add books to the library

addBook(new Book("1984", "George Orwell", 1949));

addBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937));

addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960));

// Clone a book using Object.assign() and modify the clone


Output:
Listing original books:
book 1: 1984, by George Orwell, published in 1949
book 2: The Hobbit, by J.R.R. Tolkien, published in 1937
book 3: To Kill a Mockingbird, by Harper Lee, published in 1960
Cloned and modified book:
The Lord of the Rings, by J.R.R. Tolkien, published in 1937*/



function Book(title,author,year){
    this.title=title,
    this.author=author,
    this.year=year
   
}
let library=[]
    function addbook(Book){
        library.push(Book);
    }

function listbooks(){
    for(let name of library){
console.log(`${name.title}:  by ${name.author}, published in ${name.year}`)
}

}

addbook(new Book("1984", "George Orwell", 1949));
addbook(new Book("The Hobbit", "J.R.R. Tolkien", 1937));
addbook(new Book("To Kill a Mockingbird", "Harper Lee", 1960));


let cloned = Object.assign({}, library[1]);
cloned.title = "The Lord of the Rings";
listbooks();
console.log("Cloned and modified book:");
console.log(`${cloned.title}, by ${cloned.author}, published in ${cloned.year}`);
console.log(library[1])

















// Question 2: Shopping Cart

// You are building an online shopping cart where users can add, and view items. Each item has a name, price, and quantity.


// 1. Create a factory function 'createItem' to generate an item with properties 'name', 'price', and 'quantity'.

// 2. Implement a 'cart' array to store items.

// 3. Implement 'addItem' to add items from the cart.

// 4. Use a 'for...in' loop to iterate over the properties of an item object and display them.

// 5. Implement a 'calculateTotal' function that uses a 'for...of' loop to calculate the total cost of items in the cart.


// Sample template:
// // Factory function to create an item

// function createItem(name, price, quantity) {

// // code here

// }

// // Array to store items in the cart

// const cart = [];

// // Function to add an item to the cart

// function addItem(item) {

// // code here

// }

// // Function to list all items using 'for...in' loop

// function listItems() {

// // code here

// }

// // Function to calculate total cost using 'for...of' loop

// function calculateTotal() {

// // code here

// }

// // Test case: Add items to the cart and display them

// addItem(createItem("Laptop", 1200, 1));

// addItem(createItem("Phone", 800, 2));



// Output:
// Item details:

// name: Laptop

// price: 1200

// quantity: 1

// Item details:

// name: Phone

// price: 800

// quantity: 2

// Total cost of items in the cart: 2800





function createItem(name,price,quantity){
    return{
        name:name,
        price:price,
        quantity:quantity
    }
}
let cart=[];
function additem(item){
    cart.push(item);
}

function iterate(){
    for(let key of cart){
       console.log(key) 
    }

}
function calculateCost(){
    let cost=0;
    for(let item of cart)
    {
        cost=cost+item.price*(item.quantity)
    }
    return cost
}
additem(createItem("Laptop", 1000, 4));
additem(createItem("Phone", 100, 2));
iterate();
console.log(`Total cost of the items is ${calculateCost()}`)