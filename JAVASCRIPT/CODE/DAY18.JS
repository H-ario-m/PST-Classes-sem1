// let arr=[1,2,3,4,5]

// function area(arr){
//     let res=[]
//     for(i=0;i<arr.length;i++)
//    res.push(Math.PI*arr[i]*arr[i])

//     return res
// }

// function para(arr){
//     let re=[]
//     for(i=0;i<arr.length;i++)
//     re.push(2*Math.PI*arr[i])
// return re
// }

// function dia(arr){
//     let ret=[]
//     for(i=0;i<arr.length;i++)
//     ret.push(2*arr[i])

//     return ret
// }

// console.log(area(arr))
// console.log(para(arr))
// console.log(dia(arr))





// function f1(jb,bj){
//     console.log("y55555555e")
//     jb()
//     bj()
// }

// function f2(){
//     console.log("hiiiii")
// }

// function f3(){
//     console.log("hiiifivee")
// }

// f1(f2,f3)








// function f5(){
//     return f4()
// }

// function f4(){
//     console.log("naya tarikaaa")

// }

// f5()




// function f1(){
//     console.log("y55555555e")
//    return [f2(),f3()]
// }

// function f2(){
//     console.log("hiiiii")
// }

// function f3(){
//     console.log("hiiifivee")
// }

// f1(f2,f3)





// function calculate(radius,method){
//     let res=[]
// for(i=0;i<radius.length;i++){
//     res.push(method(radius[i]))
// }
// return res
// }

// function area(radius){
//     return Math.PI*radius*radius
// }
// function para(radius){
//     return 2*Math.PI*radius
// }
// function dia(radius){
//     return 2*radius
// }

// let radius=[1,2,3,4,5]
// console.log(calculate(radius,area))



// function calculate(radius,method){
//     let res=[]
// for(i=0;i<radius.length;i++){
//     res.push(method(radius[i]))
// }
// return res
// }
// let area=(radius)=>Math.PI*radius*radius
// let para=(radius)=>2*Math.PI*radius

// let dia=(radius)=>2*radius

// let radius=[1,2,3,4,5]
// console.log(calculate(radius,area))
// console.log(calculate(radius,dia))
// console.log(calculate(radius,para))







//filter()

// let arr=[2,4,2,1,4,2]


// let newres = arr.filter(fun)

// function fun(elem,index,arr){
//     console.log(elem,index,arr)}

// console.log(newres)






//  let arr=[2,4,2,1,4,2]


// let newres = arr.filter(fun)

// function fun(elem,index,arr){
// if(elem%2==0)
//     return elem    



// }

// console.log(newres)









// let arr=[2,4,2,1,4,2]


// let newres = arr.filter((ele)=>ele%2==0);
// console.log(newres)













// let ar2=["apple","looon","siuuuu","heeeyaah","hhehe"]

// let newres2 = ar2.filter((ele)=>ele.length>5);
// console.log(newres2)






// const people=[{name:"alice",age:56},
//     {
//         name:"bob",
//         age:3
//     },
//     {
//         name:"charlie",
//         age:23
//     },
//     {
//         name:"dave",
//         age:45
//     }
// ]

// console.log(people.filter((people)=> people.age<=25 ).map((ele)=>ele.name))





// //let arr=[2,4,2,1,4,2]

// console.log(arr.some(e=> e<4))
// console.log(arr.every(e=>e<4))








// //let arr=[2,4,2,1,4,2]


// console.log(arr.reduce((total,value)=>{
//     total=total+value
//     return total
// },0))



const items =[
    {
        name:"apple",category:"electronic",price:329492
    },
    {
        name:"laptop",category:"electronic",price:442334
    },
    {
        name:"t shirt",category:"fashion",price:932
    },
    {
        name:"shampoo",category:"dailyuse",price:234
    },
    {
        name:"jeans",category:"fashion",price:932
    }]
 
    