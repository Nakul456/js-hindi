
// > , < , <= , == , >= , === , != , !==

const temperature = 40

 if (temperature ===40) {
    console.log("less then 40");
    
 } else {
    console.log("greater the 40");
    
 }

//  const score = 200

//  if (score > 100) {
//     let power = "fly"
//     console.log(`User power:${power}`);
    
//  } 
//   console.log(`User power:${power}`);

let balance = 1000

// if (balance > 5000) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less then 500");
    
// } else if (balance <750) {
//     console.log("less then 750");
    
// }else if (balance < 900) {
//     console.log("less then 900");
    
// }else {
//     console.log("less then 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("user logged in :");
    
}



