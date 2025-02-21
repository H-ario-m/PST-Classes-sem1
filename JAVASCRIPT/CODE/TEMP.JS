// function operation(a, b) {
//     let k = 0;
//     while (a !== b) {
//       if (a > b) {
//         if (a % 2 == 0) {
//           a /= 2;
//         } else {
//           a--;
//         }
//       } else {
        
//         if (b % 2 == 1) {
//           b++;
//         } else {
//           b /= 2;
//         }
//       }
//       k++;
//     }
    
//     return k;
    
//   }
//   let answer = operation(2,8)
//   console.log(answer)






// function accum(s) {
// 	// your code
  
//   let j;let a;
//   let b;let c=[];
//   a = s.split("")
//   let l = a.length;
// for(j=0;j<l;j++) 
// {
   
//    b=a[j];
//    let hj= b.toLowerCase()
//     let bs = b.toUpperCase() + hj.repeat(j)
//    c.push(`${bs}`)
//   }
//   let bh = c.join("-");
//   let to = bh.toString();
//   return to
// }
// console.log(accum("jfuweJfoen"))
// console.log(typeof(to))





// function getMiddle(s)
// {
//   //Code goes here!
//   let ar=[];
//   let eve;
 
//   let sp= s.split("")
//   ar.push(sp)
//   let l = s.length;
//   let mid = Math.floor(l/2)
 
//       if (l%2==0)
//       {
       
        
//         return  `${s[mid-1]}${s[mid]}`
//       }
//       else{
       
         
//         return `${s[mid]}`
//       }
      
      
// }
      
//     let v = getMiddle("ras")  
    
//     console.log(v)
/*You are going to be given a word. Your job is to return the middle character of the word.
 If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.*/
 







//  function differenceOfSquares(n) {
//   // ...
  
//   let i ;
//   let sum=0;
//   let sqsum=0;
//   let sumsq;//square of sums
//   for (i=1;i<=n;i++)
//     {
//       sum = sum + i;
//       sqsum = sqsum +(i*i);
      
//     }
//   sumsq = sum*sum;
//   let diff= sqsum-sumsq;
//   return diff ;
// }
// console.log(differenceOfSquares(4))


// var isSquare = function(n){
//   if (n% Math.sqrt(n)==0){
//     return true;
//   }
//   else if (Math.sqrt(n)==0)
//     {
//       return true;
//     }
//   else if(Math.sqrt(n)<0){
//   return false;
//     }
//   else{
//     return false;
//   }
// }

//   console.log(isSquare(4))


// function narcissistic(value) {
//   // Code me to return true or false
//   let value1=value.toString();
//   let sum=0;
//   let new3 = value1.length;
//   let vat = value1.split("");
//   for(let i= 0;i<new3;i++)
//     {
//       let val= parseInt(vat[i]);
//       sum = sum+ (val**new3);
                  
      
//     }
//   if (sum==value){
//     return true
//   }
//   else {
//     return false
//   }
// }
// console.log(narcissistic(153));

// function missingNo(nums) {
 
//   let sum=0;
//   let sum3=0;
//   for (let i=0;i<=100;i++)
//     {
//        sum = sum + i;
//     }
//   for (let i=0;i<(nums.length);i++)
//     {let u =  parseInt(nums[i]);
//       sum3 = sum3 + u;
//     }
//   let diff = sum - sum3;
//   return diff
// }
// let arr1=[9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16] // 26
//     let arr2 = [26, 0, 75, 87, 33, 52, 37, 59, 27, 4, 54, 15, 24, 7, 21, 82, 98, 79, 34, 25, 1, 99, 5, 10, 96, 97, 65, 85, 47, 28, 81, 70, 74, 11, 38, 45, 84, 13, 41, 2, 86, 39, 29, 43, 19, 31, 18, 58, 14, 77, 69, 32, 6, 66, 61, 62, 50, 53, 8, 80, 72, 9, 68, 35, 42, 73, 83, 71, 92, 95, 63, 51, 16, 17, 64, 22, 44, 91, 30, 76, 12, 3, 46, 60, 36, 56, 88, 89, 100, 78, 90, 49, 55, 48, 23, 93, 57, 67, 20, 94] // 40
//     let arr3 = [15, 60, 61, 95, 46, 38, 68, 11, 47, 45, 27, 23, 3, 16, 8, 81, 76, 63, 62, 57, 59, 22, 55, 78, 28, 54, 74, 39, 79, 65, 48, 82, 17, 2, 98, 90, 18, 9, 56, 34, 7, 75, 10, 93, 35, 5, 73, 77, 85, 71, 13, 91, 83, 70, 89, 4, 84, 14, 52, 99, 53, 33, 49, 42, 40, 58, 30, 36, 67, 72, 41, 26, 87, 97, 25, 29, 50, 64, 21, 88, 66, 24, 94, 51, 1, 100, 0, 96, 69, 12, 92, 31, 37, 6, 86, 32, 19, 44, 20, 43] // 80
//     console.log(missingNo(arr1))
    

// function moveZeros(arr) {
//   let i;
//   let xc=[];
//   let yc= [];
//   for (i=0;i<arr.length;i++)
//     {
//       let ar = arr[i]
//       if(ar===0){
      
//        xc.push(ar);
//       }
//       else {
// yc.push(ar)
//       }
//     }
//     const arrn = yc.concat(xc)
//   return arrn
// }
// let ar2 = [ 1, 2, +0, 1, +0, 1, +0, 3, +0, 1 ];
// console.log(moveZeros(ar2))
// function alphabetPosition(text) {
//   let arr=[];
//   for(let i=0;i<text.length;i++){
//   let b = text[i];
//     if(b.match(/[a-z]/i)){
//     let a= b.toLowerCase().charCodeAt(0)-97+1
//   arr.push(a);
//       }
  
  
//   }
//   return arr.j();
// }let t = "The sunset sets at twelve o' clock.";
// console.log(alphabetPosition(t));


// function generateShape(integer){
 
//   for(let i=0;i<integer;i++)
//   {
//     let str ='';
//     for(let j=0;j<integer;j++)
//     {
//       str+= '+ ';
      

//     }
//     console.log(str)
  

//   } 
  
//   }
//  generateShape(5)



// function longest(s1, s2) {
//    // your code
//    let count = 0;
//    let ne=[];
//    let d = s1.concat(s2);
//    let c= d.join('')
//    for (let i=0;i<d.length;i++)
//      {
//        for(let j=0;j<d.length;j++)
//          {
//            if (d[i]==d[j]){
//              count++;
            
//            }if(count==1)
//              {
//                ne.push(d[i]);
//              }
//          }
//      }return d;
//  }
//  let s1 = "abc";
//  let s2 = "cde";
//  console.log(longest(s1,s2));










// 





// function likes(names) {
//   // TODO
//   const d= (names.length);
//   switch (d){
//     case 0:return `no one likes this`;
//     break;
//       case 1: return`${names[0]} likes this`;
//       break;
      
//       case 2: return`${names[0]} and ${names[1]} like this`;
//       break;
//       default: 
//       if((d-2)>2)
//       return `${names[0]} , ${names[1]} and ${d-2} others like this`;
    
        
//   }
// }

// let g=likes(["jhg"])
// console.log(g)







let c=0;
let n=19;
for(let i=1;i<=n;i++)
{
  if(n%i==0)
    ++c;
}
if(c==2)
  console.log("true")
else 
console.log("false")