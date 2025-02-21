//factory function is just like regular function which returns an object
//but the difference is that it is used to create objects




// function createcircle(n){
//     return{
//         radius:n,
//         draw :function(){
//             console.log("Drawing a circle")
//         }
//     }
// }
// const circle1=createcircle(2)
// console.log(circle1)









//OBJECT ORIENTED STYLE OF PROGAMMING 

//CLASS-- BLUEPRINT OF AN OBJECT WHICH DEFINES HOW THE OBJECT LOOKS
//OBJECT--INSTANCE OF A CLASS
//CONSTRUCTOR--USED TO CREATE AND INITIALIZE OBJECTS(CREATE USINg a new keyword)(USES THIS KEYWORD to call the current object properties)(this refers to the current objed=ct you are working on )
//CONSTRUCTOR FUNCTION 

// function person(names,ages){
//     this.name=names,
//     this.age=ages,
//     this.greet=function(){
//         return ("heeelooowww")
//     }
// }
// const person1 = new person("chigota",64)
// const persons3=new person("lo",65)
// console.log(person1.greet());
// console.log(persons3);




// function createPerson(){
//     return{
// name:"chigota",
// age:64,
// greet:function(){
// console.log("hii")
// }
//     }
// }
// const p1=createPerson()
// console.log(p1)


// //dynamic nature of the objects


//

// function createcircle(n){
       
//            this. radius=n,
//            this. draw =function(){
//                 console.log("Drawing a circle")
            
//         }
//     }
//     const circle3=new createcircle( 94)
//     circle3.color = "red";
//     console.log(circle3)
// circle3.diameter = circle3.radius*2
//     delete circle3.color
//     console.log(circle3)
















//GAURAV SIR








//let obj={
    //     firstName:"ierf",
    //     secondname:"krnr",
    //     fullname(){
    //         console.log(obj.firstname+obj.secondname)
    //         console.log(this.firstname+this.secondname)
    
    //     }
    //     }
    // obj.fullname()
// 
let obj={
    firstName:"ierf",
    secondname:"krnr",
    fullname:function(){
        console.log(obj.firstname+obj.secondname)
        console.log(this.firstname+this.secondname)//this can only be used inside the object and not outside 
        
    }
    }
obj.fullname()
   //if i am working inside an object and we have to acess the object we can use this keyword because
   //this keyword is used to call/access the property of the object on whichj we are working on
   //refer to the same object inside ghe object this keyword is used if we have to use the [roperties outside the object]
   //then we have to use obj. to call/access the properties



   console.log(obj.fullname)//it tells the type of the key (function defination )if we dont add()








   //factory function----- function that returns an object
   
   function PSTSTD(name,age,rollno){
    return {
        name:name,
        age:age,
        rollno:rollno,
        calling:function(){
            console.log(`${this.name} has the roll no${this.rollno}`)
        }
    }
   }
   const a1=PSTSTD("chigota",88,903)
   console.log(a1)



   //IF THE KEYNAME IS SIMILAR TO THE PARAMEGTER NAME WE CAN ELIMINATE THE PARAMETER NAME


   function PSTTD(name,age,rollno){
    return {
        name,
        age,
        rollno,
        //WE CAN ELIMINATE THE KEYNAME IF THE KEYNAME AND THE PARAETER NAME ARE SAME
        
    }
   //the object wherewe store it it can be changed but the function can not be modified outside the function
   }

   console.log(PSTTD("jmsc",9,92))
   // and the OUTPUT WILL ALSO BE CONTAINING THE KEY NAME

   //IF THE KEYNAME AND PARAMETER NAME ARE NOT SAME THEN WE CAN SIMPLY USE THE PREVIOUS METHOD

 //DYANMIC NATURE OF AN OBJECT 
   //WE CAN ADD NEW KEY VALUE PAIR DYNAMICALLY
const std1= PSTTD("hwevfv",873,832473)
std1.rollno= 83247;
console.log(std1);
console.log(typeof(std1));
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
//WE CAN ALSO DELETE THE KEY VALUE PAIR DYNAMICALLY





function pst(names,ages,fees){//the function name is also printed in the output
    //OUTPUT--------pst { name: 'lo', age: 65, greet: [Function (anonymous)] }
        this.name=names,
        this.age=ages,
        this.fees=fees,
        this.greet=function(){
            return ("heeelooowww")

        }
        this.intro=function() {
            console.log(`my name is ${this.name}`)
        }
    }
    const person1 = new pst("chigota",64,96996)//new keyword is used to create instance or object of the prototype
    const persons3=new pst("lo",65,7979787)
    console.log(person1);
    console.log(person1.greet());
    console.log(persons3);

    //contructor function returns the prototype name but factory function doesnot
    //constructor function are faster than factory function 
    //
    //constructor function are used to create object of the class



    function car(model,color,year,cyear){
        return {
            car_model:model,
            color:color,
            year:year,
            old: function(){
                return `your ${this.car_model} is ${Math.abs(this.year-cyear)} years old `;
            }
        }
    }
    console.log(car("jend","red",2000,2024))
   let bhdh=car("jend","red",2000,2024);
   console.log(bhdh.old())





   






   


