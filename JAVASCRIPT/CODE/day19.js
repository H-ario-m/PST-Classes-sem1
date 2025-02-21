// function greet(name,callback)
// {
//     console.log(`hello ${name}`)
//     callback()
// }
// function call()
// {
//     console.log("call back function")
// }
// greet("chigota",call)



//process user input first user nme second callback        print user name and call back will print confirmation message

function processuser(name,callback)
{
    console.log(`hello ${name}`)
    callback()
}
function callback()
{
    console.log("************************Identity Confirmed******************************")
}

processuser("chigota",callback)
console.log("@".repeat(5))



let mypromise = new Promise(function(resolve,reject){
    let sucess = true;
    if (sucess){
        resolve("the data has loaded successfully")
    }
    else {
        reject ("there was an error")
    }
})

mypromise.then(function(message){
    console.log(message)
}).catch(function (error){
    console.log(error)
})




let promise= new Promise(function (resolve,reject){
    const a="hiiii"
    const b="hiii"
    if(a==b){
        resolve()
    }else{reject()}
})
promise.then(function(){console.log("Success, You are a geek")}).catch(function(){console.log("!!!!!!!!!!!!!!!!ERROR!!!!!!!!!")})























let count=0;
function increaseCount(){
    count++;
    console.log(count)
}

let id= setTimeout(increaseCount,3000)
clearTimeout(id)
console.log("sidetime is stopped")
















let fb= require('fs')
console.log("prit / start")
let data=fb.readFileSync('sample.txt','utf-8')
console.log(data)
console.log("hheheheeh")