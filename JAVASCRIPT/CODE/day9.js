
//WHILE LOOP

// let i=0//initializaltion 
// while(i<10){//condition
// console.log(i);
// i++;//incrementation

// }


// function kuchbhi(){
//     let i=1;
//     while(i<=10){
//     console.log(i);
//     ++i;
    
//     }

// }
// kuchbhi()






// function printn(){
//     let i=0;
//     do{
//         console.log(i);//do gurantees that the code bl;ock is executed only once 
//         i++;
//     }
//     while(i<10);
// }
// printn()








// //FOR IN LOOPS 

// function obj(){
//     let obj={name:"Rahul",age:20};
//     for(let i in obj)
//     {
//         console.log(`${i}: ${obj[i]}`)
//     }
// }
// obj()






// //FOR OF LOOPS


// function pfkm(){
//     let arr=[1,2,3,4,5,6,7,8]
//     for(let i of arr)
//     {
//         console.log(`${i}`)
//     }
// }
// pfkm()












// //JAYA SIR LECTURE 




// for(i=0;i<6;i++);
// console.log(i)//value will nbe 6 because by default i is var and due to semiclolon there is ni function body so thr ntire loop will run and the value will be --6






// for(i=0;i<5;i++)
//     console.log("hi")//hii will be printed in finite no of times
// //because of semicolon after for loop it will run in infinite loop and print hi in infinite times






// let i=0;
// while(i<5{
//     console.log(i)
// }
//infinite -- 0




//do while
// correct_pass=1234

// do{
// entered_pass=prompt("enter the password")//prompt is uded to take user argument i.e argument from the user

// }while(entered_pass!=correct_pass)





    //write a program to reverse a string 
    // let a="jljnv"
    // let sr=""
    // for(i=0;i<a.length;i++)
    // {
    //     sr=a[i]+sr
    // }
    // console.log(sr)














    //GAURAV SIR


    //ques1
//     let n=76;
//     for(i=1;i<=n;i++)
// console.log(i)





//     //ques 2

// let i=2;
// while(i<n)
// {
// console.log(i);
// i+=2
// }


// //ques 3
// let s=1
// do{
//     console.log(s);
//  i+=2c
    
// }while(i<n)




let nar=[];
let rev=[2.4,3,2,4,56,2,3]
for(i=1;i<rev.length;i++)
{
nar.unshift(rev[i]);
}

console.log(nar);






//or


let ref=[2.4,3,2,4,56,2,3]
let na=[]

for(i=0;i<ref.length/2;i++)
    {
let temp = ref[i]
        ref[i]=ref[ref.length-1-i]
    }
    console.log(ref)
        









    let std=
    {
        name:"chigota",
        age : 14,
        class:12
    }
    for (let k in std)
    {
        console.log(std[k])
    }

    console.log(14|2)
    let h=4
    let g=5
    let j=6
    let max=(h>g)?(h>j)?h:j:(g>j)?g:j;
    console.log(max)








//     let str='anshuman'
//     let str2=str.split('')
//     let start=0;let end=str.length-1;
  

//    while(start<end){
//     let trmp=str2[start]
//     str2[start]=str2[end]
//     str2[end]=trmp
//     start++
//     end--
//    }
//    console.log(str2.join(''))
