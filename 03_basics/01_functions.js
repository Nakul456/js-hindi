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


function calculateCartPrice(...num1) {
   return num1
}

console.log(calculateCartPrice(100,200,5000));

const user = {
   username : "hitesh",
   prices : "2"
}

function handleObject(anyobject) {
   console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
   
}

handleObject(user)

const MynewArray = [100,400,500,700]

function returnMysecondValue(getArray){
         return getArray[2]
}

// console.log(returnMysecondValue(MynewArray));
console.log(returnMysecondValue([200 , 400 ,800]));

