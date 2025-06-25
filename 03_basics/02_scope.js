// let a = 300


// if (true) {
//     let a = 20
//     const b = 22
//     var c = 30

//     console.log(a);
    
// }

// console.log(a);
// // console.log(b);
// console.log(c);


// function one () {
//     const username = "hitesh"


//     function two (){
//         const website = "youtube"
//          console.log(username);
        
//      }
//     // console.log(website);

//     two()
    
// }

// one()


// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = "youtube"
//         console.log(username + website);
        
//     }
//     // console.log(website);
    
// }

// // console.log(username);


//++++++++++++++++++++++++++++++intresting+++++++++++++++++++++//

//the above are the two different tyes of declaring of fuctions


//In This example we can do the log in above the function 
console.log(addone(5));

 function addone(num) {
    return num + 1
 }

 

//In This example we cannnot do the log above the function 
//IN this we have declared the functions but also we have the function
//ReferenceError: Cannot access 'addTwo' before initialization
console.log(addTwo(5));

 const addTwo = function(num) {
    return num + 2 
 }

 