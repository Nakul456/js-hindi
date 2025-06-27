 // falsy values

 // false, 0 , -0 , BigInt , 0n , "" , null, undefined , NaN

 // truthy values
//  "0" , " " , 'false' , [] , {} , function(){}

const userEmail = []

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
}

// Nullish Coalescing Operator (??): null , undefined

let val1;

// val1 = 5 ?? 10m

// val1 = null ?? 1
// val1 = undefined ?? 5

val1 = null ?? 10 ??20

console.log(val1);

// Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("greater then 80");
;
