// Question 1: Print prime numbers from 2 to 30 using a count of divisors

for (let num = 2; num <= 30; num++) {
    let divisorCount = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisorCount++;
        }
    }
    if (divisorCount === 2) {
        console.log(num);
    }
}


console.log("")
console.log("")
console.log("")
console.log("")
console.log("")


// approach 2
function Prime(n) {
    if (n < 2) {
        return false;
    }
    
  
    for (let i = 2; i < n; i++) {
        if (n% i === 0) {
            return false; 
        }
    }
    return true; 
}


for (let n = 2; n <= 30; n++) {
    if (Prime(n)) {
        console.log(n); 
    }
}


console.log("")
console.log("")
console.log("")
console.log("")





// Question 2: Function to check whether a number is available in an array

function isNumberInArray(arr, number) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            return true;
        }
    }
    return false;
}


let numbers = [10, 26, 30, 487, 50];

let result1 = isNumberInArray(numbers, 30);
let result2 = isNumberInArray(numbers, 26);

console.log(result1); 
console.log(result2); 







//question 3 display the rank 
function rank(percentStd1, percentStd2, percentStd3) {
    let student1 = { student: 1, 
        percentage: percentStd1 };
    let student2 = { student: 2,
         percentage: percentStd2 };
    let student3 = { student: 3,
         percentage: percentStd3 };
    if (student1.percentage > student2.percentage && student1.percentage > student3.percentage) {
        console.log("student 1 has rank 1");
        if (student2.percentage > student3.percentage) {
            console.log("student 2 has rank 2");
            console.log( "student 3 has rank 3");
        } else {
           console.log( "student 3 has rank 2");
            console.log("student 2 has rank 3");
        }
    } else if (student2.percentage > student1.percentage && student2.percentage > student3.percentage) {
        console.log( "student 2 has rank 1");
        if (student1.percentage > student3.percentage) {
           console.log( "student1 has rank 2");
            console.log("student 3 has rank 3");
        } else {
            console.log("student3 has rank 2");
           console.log("student 1 has rank 3");
        }
    } else {
       console.log("student3 has rank 1");
        if (student1.percentage > student2.percentage) {
           console.log( "student1 has rank 2");
           console.log("student2 has rank 3");
        } else {
            console.log( "student2 has rank 2");
            console.log( "student1 has rank 3");
        }
    }
}

rank(34, 98, 89);





console.log("")
console.log("")
console.log("")
console.log("")




function ranks(percentStd1, percentStd2, percentStd3) {

    let percentages = [percentStd1, percentStd2, percentStd3];
    let stu = ["student 1", "student 2", "student 3"]
    for (let rank = 1; rank <= 3; rank++) {
        let maxIndex = 0;
        for (let i = 0; i < percentages.length; i++) {
            if (percentages[i] > percentages[maxIndex]) {
                maxIndex = i;
            }
        }
        
        console.log( `student${maxIndex + 1} has rank ${rank}`);
        
       
        percentages[maxIndex] = 0;
    }
}

ranks(90, 79, 89);

