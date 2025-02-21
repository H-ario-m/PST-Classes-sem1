// function add(n1,n2)
// {console.log("addition");
// let result=n1+n2;
// return sub(67,54)
// }

// function sub(n1,n2)
// {
//     return n1-n2
// }
// console.log("result",add(27+53))



const pro1={
    name:"Ramen",
    price:67,
    quantity:5,
}
const pro2={
    name:"yippie",
    price:15,
    quantity:3,
}
const pro3={
    name:"maggi",
    price:20,
    quantity:6,
}
let product=[pro1.price*pro1.quantity,pro2.price*pro2.quantity ,pro3.price*pro3.quantity];
function calculate_toatal_average(product)
//we can write in parameterds anything its not necessary to write product we just have to change everything accordingly
{
    let total = product[0] + product[1] + product[2];
    let average = total/3;
    console.log(total)
    console.log(average)
}
calculate_toatal_average(product)