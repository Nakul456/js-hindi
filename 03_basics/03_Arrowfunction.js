// const user = {
//     username : "Hitesh" ,
// //     prices : 999 ,

//     welcomeMessage : function () {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
        
        
//     }
// }

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// // console.log(this);



//The Above is the example of arrow function
// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
    
// }

// chai()


//the above the example of the function in which we cannot write the return 
// const addTwo = (num1 , num2 ) => num1 + num2 

// const addTwo = (num1 , num2) => (num1 + num2 )

const addTwo = (num1 , num2) => ({username : "hitesh"})

console.log(addTwo);
