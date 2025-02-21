// reverse a sting 
// let str = "hello"
// let a = str.split('').reverse().join('')
// console.log(a)


// check palindrome 
function anagram(str)
{
    for(let i=0;i<str.length;i++)
    {
        if(str[i]!=str[str.length-1-i])
        {
            return false;
        }
        else{
            return true;
        }
    }
}

let a = anagram("dad")
console.log(a)




function anagrm(str){
    let st="";
    for(let i=0;i<str.length;i++)
    {
        st=str[i]+st
    }
    if(st===str)
    {
        return true
    }
    else{
        return false
    }
}

let b = anagrm("dad")
 console.log(b)


 //self calling function
 (function(){
    console.log("hello world")
})()


//bind method
//what is first class function

let obj = {
    name: "john",
    sayHello: function(){
        console.log("hello",this.name)
    }
}
obj.sayHello()


//first class citizen
let obj1 = {
    name: "john",
    sayHello: function(){
        return function(){
            console.log("hello",this.name)
        }
    }
}
obj1.sayHello()()

//factory function and constructor function

function createPerson(name,age){
    return{
        name: name,
        age: age
    }
}


