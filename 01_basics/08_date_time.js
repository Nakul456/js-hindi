let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreateDate = new Date(2025 , 0 , 16) //months start in js from 0
// let myCreateDate = new Date ("2025-01-14")
let myCreateDate = new Date ("01-14-2025")
// console.log(myCreateDate.toLocaleString());

let myTimestamp = Date.now()

// // // console.log(myTimestamp);
// // // console.log(myCreateDate.getTime());
// // console.log(Math.floor(Date.now()/1000));//  To convert in seconds


newDate.toLocaleString('default' ,{weeday:"long",})