// // Print numbers from 1 to 10 synchronously
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
  
//   // Print numbers from 11 to 20 asynchronously
//   for (let i = 11; i <= 20; i++) {
//     setTimeout(() => {
//       console.log(i);
//     },5000);
//   }
//   console.log("hello world")
//   console.log("hiiiii guyz")
  











  // function checkWeather() {
  //   return new Promise((resolve, reject) => {
  //     const isSunny = Math.random() > 0.5; // Randomly choose sunny or rainy
  //     if (isSunny) {
  //       resolve("Sunny");
  //     } else {
  //       reject("Rainy");
  //     }
  //   });
  // }
  // checkWeather()
  //   .then(() => {
  //     console.log("Weather is great for a picnic!");
  //   })
  //   .catch(() => {
  //     console.log("It might rain today!");
  //   });
  











    // function makeDinner() {
    //   setTimeout(() => {
    //     console.log("Step 1: Boil water");
    //     setTimeout(() => {
    //       console.log("Step 2: Add pasta");
    //       setTimeout(() => {
    //         console.log("Step 3: Stir sauce");
    //         setTimeout(() => {
    //           console.log("Step 4: Serve meal");
    //         }, 1000);
    //       }, 1000);
    //     }, 1000);
    //   }, 1000);
    // }
    
    // makeDinner();

    










    // function stockPriceChecker() {
    //   const intervalId = setInterval(() => {
    //     const stockPrice = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
    //     console.log(`Current Stock Price: ${stockPrice}`);
    
    //     if (stockPrice > 400) {
    //       clearInterval(intervalId);
    //       return new Promise((resolve) => {
    //         resolve("Stock price is too high!");
    //       }).then(console.log);
    //     }
    //   }, 2000);
    // }
    
    // stockPriceChecker();

    










let result = fetch('https://dummyjson.com/osts')

let resp = result.then( result => result.json())
resp.then((data) => { console.log(data) })
resp.catch((err) => console.log("i am getting error"))
