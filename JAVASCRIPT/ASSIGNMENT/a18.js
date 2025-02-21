function addElementIfNotPresent(arr, element) {
    if (!arr.includes(element)) {
      arr.unshift(element);
      return arr;
    } else {
      return "element is already available in the given array";
    }
  }
  let arr = [2, 3, 4];
  console.log(addElementIfNotPresent(arr, 1));
  console.log(addElementIfNotPresent(arr, 2));  






//Question 2: Combining Arrays
//Create a function that combines two arrays of strings into a single array using the `concat` method. The function should return the merged array. Then print all the elements which have length 5.


  function combineArrays(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    for (let i = 0; i < mergedArray.length; i++) {
      if (mergedArray[i].length === 5) {
        console.log(mergedArray[i]);
      }
    }
    return mergedArray;
  }
  let arr1 = ["apple", "banana", "chery"];
  let arr2 = ["dates", "elderberry", "fig"];
  console.log(combineArrays(arr1, arr2));








  /*Question 3: Slicing and Splicing
Create a function that takes an array and performs the following actions:

Use the `slice` method to extract a portion of the array.

Use the `splice` method to insert elements into the array.

Return the modified array.*/

  function sliceAndSplice(arr, start, end, ...insertElements) {
    let newArr = arr.slice(start, end);
    newArr.splice(0, 0, ...insertElements);
    return newArr;
  }
  let ar = [1, 2, 3, 4, 5, 6, 7];
  console.log(sliceAndSplice(ar, 1, 4, 10, 20));








/*Question 4: Spread Operator:
Create an array of names, and then using the spread operator, 
create a new array that includes the original names along with three additional names of your choice.
Then write a JavaScript function that uses a loop to iterate through the array and prints each name to the console with a greeting message.*/





  let names = ["John", "Jane", "Bob"];
  let newNames = [...names, "Alice", "Mike", "Sarah"];
  function printGreetings(arr) {
    for (let name of arr) {
      console.log(`Hello, ${name}!`);
    }
  }
  printGreetings(newNames);










/*Question 5:Joining Arrays:
You have two arrays: one containing first names and the other containing last names.
 Write a function that combines these two arrays into a new array of full names and separates them with a space.*/







  function joinNames(firstNames, lastNames) {
    let fullNames = [];
    for (let i = 0; i < firstNames.length; i++) {
      fullNames.push(`${firstNames[i]} ${lastNames[i]}`);
    }
    return fullNames;
  }
  console.log(joinNames(["John", "Jane", "Bob"], ["Doe", "Doe", "Smith"]));










/*Question 6: Sorting an Array:
Create an array of random numbers. Write a function that sorts this array in ascending order.*/

// let numbers = [9, 5, 1, 4, 3, 10, 8, 6, 7, 2];
// function sortAscendingly(arr) {
//   return arr.sort();
// }
// console.log(sortAscendingly(numbers));


  let numbers = [9, 5, 1, 4, 3, 10, 8,11, 6, 7, 2];
  function sortAscendingly(arr) {
    return arr.sort((a, b) => a - b);
  }
  console.log(sortAscendingly(numbers));





  



