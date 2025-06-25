 function sayMyName(){
    console.log("I");
    console.log("O");
    console.log("S");
    console.log("E");
 }

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
    
// }

// addTwoNumbers(2 , 5)

function loginUserMessage(username) {
   if(username === undefined){
    console.log("Please enter a username ");
    return
   }



    return `${username} just logged in `
}

// console.log(loginUserMessage("hitesh"));

console.log(loginUserMessage());
