let person={
    name:"hii",
    address:"bihar",

}
for(let i in person){
    console.log(i,person[i]);
}
let n=5;
let person1=[6,3,1,5,25,778,8]
for(let i=0;i<person1.length;i++){
    if(person1[i]==n){
        console.log("it is present")
    }
}



let str="yellow";
switch(str){
    case "yellow":console.log("wait")
    break;
    case "red":console.log("stop")
}