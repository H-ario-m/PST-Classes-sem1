// const value ={
//     name: "SHIYAN",
//     age :34,
//     salary:56476
// };
// const employee2={
// name:"Ajay",
// age:25,
// salary: 50000
// };
// console.log(value);
// console.log(employee2)

// let array = [value,employee2]
// let a = array[0]
// console.log(a)
// let b = array[1]
// console.log(b)
// console.log(array)




import solution from lodash 
let std={
    name:"chigota",
    age: 07,
    address:{
        state:"up",
        city:"varanasi"
    },
    intro:function(){
console.log("mai nhi janta tujhe")
    }
 } 
 let copystd=JSON.parse(JSON.stringify(std))
 copystd.name="chiku"
 copystd.name="chiku"
console.log(std)
 console.log(copystd)
 copystd.address.city="narakh"
 console.log(std)
 console.log(copystd)
//  copystd.intro()//TypeError: copystd.intro is not a function
 let cst=solution.clonedeep(std)
 console.log(cst)

