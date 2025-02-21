// let arr=[2,3,3,2,4,2]
// arr.splice(1,1,0)
// console.log(arr)


// let obj ={
//     Fname :"chigota",
//     Lname :"chiku" ,
//      get fullname(){
//     return this.Fname+" "+this.Lname
//     }
//     }
    
//     console.log(obj.fullname)


// let obj ={
//     Fname :"chigota",
//     Lname:"chiku",
//      set updatename(last){
//       this.Lname = last
//     },
//      get fullname(){
//     return this.Fname+" "+this.Lname
//     }
//     }
//       obj.updatename = "guava"
//       console.log(obj.fullname)  // chigota guava
    



let arr=['dog','cat','camel','duck','ant',{name:"chigota"}]
let new_arr=arr.slice()
console.log(new_arr)

new_arr[5].name="chiku"
new_arr[1]="elephant";
console.log(new_arr);


    

let re=[1,2,3,4];
let re2 =re.toReversed();
console.log (re)         //[1,2,3,4]
console.log (re2)    //   [4,3,2,1]






