// Convert the string to lowercase.

// Remove all spaces from the string.

// Check if the resulting string contains the word "javascript" (case insensitive).

// Count the number of occurrences of the letter 'a' in the string.

// Replace all occurrences of the letter 'e' with 'X' in the string.

// Hint:
// Use string methods such as `toLowerCase()`, `replace()`, `indexOf()`.




let str="Convert the String to a E javascript lowercase"
let str2=str.toLowerCase()
console.log(str2)
let space=str.split(" ")
let rem=space.join("")
console.log(rem)
let found=false;
for(let i=0;i<space.length;i++)
    {
    if("javascript"=== space[i].toLowerCase()){
        found=true;
console.log(found)
    }
    
    
}
if(!found){
console.log("false")
}


let searchWord = "javascript";
    let containsJavaScript = rem.indexOf(searchWord) !== -1;
    console.log(containsJavaScript)


let count=0;
for(let char of rem){
    if(char === "a"){
count++;
    }
}
console.log(count);
let stt=str.replace(/e/gi,'X')
console.log(stt)




