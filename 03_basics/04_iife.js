// immediately Invoked Function Expressions (IIFE)

(function chai () {
    //name iife
    console.log(`DB CONNECTEd`);
    
}());

( (name) => {
    //without name iife
    console.log(`DB CONNECTED R ${name}`);
    
} )('hitesh')