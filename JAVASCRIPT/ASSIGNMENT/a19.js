//Question 1: Takes object and return Array of keys
//Write a function that takes an object as input and returns an array of all the keys where the value is a string.

const obj={
    name:"lo",
    age:45,
    num:34,
    city:"lko",
    country:"india"

}
function arayconversion(){
 return Object.keys(obj)
}



console.log(arayconversion())





//Question 2: Takes object and return a object where key and value swapped
//Implement a function that takes an object and returns a new object with the keys and values swapped.



function swapKeysValues(obj){
    let newObj={}
    for(let key in obj){
        newObj[obj[key]]=key
    }
    return newObj
}

console.log(swapKeysValues(obj))










//Question 3: Bank account using closure
//Implement a closure function to create a bank account that allows deposits, withdrawals,
// and checking balance


function createWallet(initialAmount) {
    let currentAmount = initialAmount;
    
    function transactionHandler(transactionType, value) {
      if (transactionType === 'addFunds') {
        currentAmount += value; 
        return `Added Funds: ${value}, New Amount: ${currentAmount}`; 
      } else if (transactionType === 'spendFunds') { 
        if (value > currentAmount) {
          return "Insufficient funds";
        } else {
          currentAmount -= value;
          return `Spent Funds: ${value}, New Amount: ${currentAmount}`;
        }
      } else if (transactionType === 'checkAmount') {
        return `Current Amount: ${currentAmount}`;
      }
    }
  
    return transactionHandler; 
  } 
  
  const myWallet = createWallet(1500); 
  console.log(myWallet('addFunds', 1000)); 
  console.log(myWallet('spendFunds',560)); 
  console.log(myWallet('checkAmount'));
  













  
  //Question 4: Sum of single Digit
  //Write a function that takes a positive integer as input, and repeatedly sums its digits until the sum is a single digit.
  // Use type casting where necessary.

  function sumSingleDigit(num) {
    let sum = 0;
    let numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
      sum += parseInt(numStr[i]);
    }
    if (sum > 9) {
      return sumSingleDigit(sum);
    }
    return sum;
  }
  
  console.log(sumSingleDigit(489));