let arr=[1,3,54,3]
let arrr=arr
arrr.push(0)
console.log(arr,arrr)





const kuchhh={
    name:"djd",
    age:82,
    kuch:"jendc ",
jav:{
    hee:"haaa"
}
}

//spread method

let clone = {...kuchhh}//cloning by spread
clone.kkis="naahhss"
clone.jav.hee="naahhss"//nested hone pe pure me changhes aa jatyta h original wale me bhui 
let kuu=kuchhh;//value by reference
kuchhh.pushed="hdks"
console.log(clone,kuu,kuchhh)
let cloneas=Object.assign({},kuchhh)//cloning by assign
let col=JSON.parse(JSON.stringify(kuchhh))//cloning by json
col.jav.hee="yeassssh"//using json and deep cloning this only aloows the clone to change without changing the original


console.log(cloneas,col)










function hii(a,b,...s)
{for(let i of s)
    console.log(a,b,i)
}
hii("u","sd","SF","dv","sdfg","gf")







// let std={
//     name:"chigota",
//     age: 07,
//     address:{
//         state:"up",
//         city:"varanasi"
//     },
//     intro:function(){
// console.log("mai nhi janta tujhe")
//     }
// }
// let copystd=std
// copystd.name="chiku"
// console.log(std)
// console.log(copystd)





//OUTPUT
/*{
  name: 'chiku',
  age: 7,
  address: { state: 'up', city: 'varanasi' },
  intro: [Function: intro]
}
{
  name: 'chiku',
  age: 7,
  address: { state: 'up', city: 'varanasi' },
  intro: [Function: intro]
}*/






// let std={
//     name:"chigota",
//     age: 07,
//     address:{
//         state:"up",
//         city:"varanasi"
//     },
//     intro:function(){
// console.log("mai nhi janta tujhe")
//     }
//  } 
//  let copystd=Object.assign({},std)
//  copystd.name="chiku"
//  copystd.name="chiku"
// console.log(std)
//  console.log(copystd)
//  copystd.address.city="narakh"
//  console.log(std)
//  console.log(copystd)




 //output
 /*{
  name: 'chigota',
  age: 7,
  address: { state: 'up', city: 'varanasi' },
  intro: [Function: intro]
}
{
  name: 'chiku',
  age: 7,
  address: { state: 'up', city: 'varanasi' },
  intro: [Function: intro]
}
{
  name: 'chigota',
  age: 7,
  address: { state: 'up', city: 'narakh' },
  intro: [Function: intro]
}
{
  name: 'chiku',
  age: 7,
  address: { state: 'up', city: 'narakh' },
  intro: [Function: intro] 
    
  */

console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")


// let std={
//     name:"chigota",
//     age: 07,
//     address:{
//         state:"up",
//         city:"varanasi"
//     },
//     intro:function(){
// console.log("mai nhi janta tujhe")
//     }
//  } 
//  let copystd={...std}
//  copystd.name="chiku"
//  copystd.name="chiku"
// console.log(std)
//  console.log(copystd)
//  copystd.address.city="narakh"
//  console.log(std)
//  console.log(copystd) 
 
 

 //output
 /*{
  name: 'chigota',
  age: 7,
  address: { state: 'up', city: 'varanasi' },
  intro: [Function: intro]
}
{
  name: 'chiku',
  age: 7,
  address: { state: 'up', city: 'varanasi' },
  intro: [Function: intro]
}
{
  name: 'chigota',
  age: 7,
  address: { state: 'up', city: 'narakh' },
  intro: [Function: intro]
}
{
  name: 'chiku',
  age: 7,
  address: { state: 'up', city: 'narakh' },
  intro: [Function: intro]
}*/










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

 
 


 //output
 /*
{
  name: 'chigota',
  age: 7,
  address: { state: 'up', city: 'varanasi' },
  intro: [Function: intro]
}
{ name: 'chiku', age: 7, address: { state: 'up', city: 'varanasi' } }
{
  name: 'chigota',
  age: 7,
  address: { state: 'up', city: 'varanasi' },
  intro: [Function: intro]
}
{ name: 'chiku', age: 7, address: { state: 'up', city: 'narakh' } }*/

    