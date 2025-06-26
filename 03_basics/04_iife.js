// immediately Invoked Function Expressions (IIFE)

(function chai () {
    //name iife
    console.log(`DB CONNECTEd`);
    
}());

( (name) => {
    //without name iife
    console.log(`DB CONNECTED R ${name}`);
    
} )('hitesh')


let val1 = 5
let val2 = 10

function addnum(num1 , num2 ){
    let total = num1+num2
    return total
}
let result1 = addnum(val1 ,val2)
let result2 = addnum(10 , 2)
