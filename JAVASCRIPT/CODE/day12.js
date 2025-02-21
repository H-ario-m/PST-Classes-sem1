// let arr=[2,4,3,1,5,9,12]
// for(i of arr ){
//     if(i%2==0){
//         console.log(i)
//     }
// }// for of loop works like this 



//factory function 

function std(name,age,roll){
    return {
        name,
        age,
        roll
    }
}
let std2=std("chigota",32,13)
console.log( typeof std("chigota",32,13))


function hhs(){
    return "hello world"
}
console.log(typeof hhs)








//rest operator
let ar =[3,5,3,2,4,3];
let [a,b,...c] = ar//destructuring of an array

console.log(a)
console.log(b)

console.log(c)

let arr = [...ar]
console.log(arr)
arr[0]=10
console.log(arr)







function hust(...n){
   let sum =0;
    for(s of n)
    {
        sum = sum + s
    }
return sum
}
console.log(hust(7,234,2334,3,342,34,1,4,2,14))









function hii(...n){
    let largest = 0;
    for(s of n)
        {
            if(s>largest){
                largest = s
            }
        }
    return largest
}
console.log(hii(823,43,23,4523,234))


//practice

console.log(Math.max(4,3,2,1))
console.log(Math.min(4,3,2,1))
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(-4.1))
console.log(Math.floor(-4.1))
console.log(Math.trunc(-3.6))
console.log(Math.pow(2,3))
console.log(Math.sqrt(2))
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10))






console.log(Math.floor(Math.random()*(10000-1000))+1000)//otp
// formula
//math.floor(math.random()*(max-min))+1000
