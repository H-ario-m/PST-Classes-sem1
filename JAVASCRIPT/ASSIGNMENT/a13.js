function person(name,age){
    return {
        name: name,
        age: age
    }
}
console.log(person("chiku",45))




//question 2 

function printPersonInfo(obj){
    console.log(`Name: ${obj["name"]}, Age: ${obj.age}`)
}

const persons={
    name: "chiku",
    age: 45
}
printPersonInfo(persons)










//question 3 

function book(title,author)
{
    this.author=author,
    this.title=title
}
let book1=new book("Harry potter","J.K Rowling")
let book2=new book("The Power of your subconcious mind ","Joshep Murphy")
console.log(book1)
console.log(book2)