const person={
    firstname:"CHIGOTA",
    last_name :"hbsd",
        age:83,
    eyecolor:"laal",
};
console.log(person)
const car={};
car.firstname="jnv";
car.last_name="erg";
car.color="knrg";
console.log(car);
let age= person.age;
let firstname= person["firstname"];
console.log(firstname);
console.log(age);
console.log(person.eyecolor);
console.log(person.firstname+"is"+person.age+"years old")

//NEW METHOD TO PRINT LEARNED 
console.log(`${person.firstname} is a ${person.age} years old CHIKU`)




//ARRAY

let fruits=["apple","banana","cherry","papaya","grapes","chiku"];
//            0       1         2       3          4      5       length = 6
fruits[2]="mango" 
fruits.push('apples')
console.log(fruits);

console.log(fruits[5])
console.log(fruits.length)
console.log(typeof(fruits))
console.log(fruits[fruits.length-4])
let a= fruits.pop();
console.log(fruits);
console.log(a)
fruits.fill("chiku",2,3)
console.log(fruits);


const location={
    city:"mumbai",
    country:"india",
    state:"maharashtra",
    address:{
        street:"boriwali",
        landmark:"film city",
        society:"Gokuldham society"
    }
}
console.log(location.address);
 console.log(location.address.street);
 console.log(location["address"]["society"])
    console.log(location.address["society"])






    
