// let std={
//     name:"looood",
//     age:23,
//     rollno:2443
// }
// let arr=Object.keys(std);
// for(let i of arr){
//     console.log(std[i]);
// }



// let std={
//     name:"looood",
//     age:23,
//     rollno:2443
// }
// console.log(Object.values(std))




// let std={
//     name:"looood",
//     age:23,
//     rollno:2443
// }
// let arr =Object.entries(std)

// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i][1])
// }



function test1(){
    let a=5;
    return a;
}
console.log(test1())



function test2(){
    let a=5;
    function right(){
        let x = typeof a;
        return x
    }
    function left(){
        let x = typeof a;
        return x
    }
    function up(){
        let x = typeof a;
        return x
    }
    return [right(),left(),up()]
}
console.log(test2())





let a= "123"
let b= parseInt(a)
console.log(typeof b)// number



let c= b.toString()
console.log(typeof c) // string