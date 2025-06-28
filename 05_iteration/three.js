 // for of loop  

//  ["" , "" ,  ""]

// [{} , {} , {}]

const arr = [1, 2, 3, 4, 5]

for (const num  of arr) {
    console.log(num);
    
}

const greetings = "Hello World"

for (const element of greetings) {
    
    console.log(`Each char is ${element}`);
    
    
}

//Maps
//Maps are used for only for the unique values there is no repeated values
const map = new Map()
map.set('IN' , "India")
// map.set('IN' , "India")
map.set('USA' , "United State Of America ")
map.set('Fr' , "France")

console.log(map);

// for (const key of map) {
//     console.log(key);
   
    
// }

for (const [key , values] of map) {
    console.log(key , `:-` , values); // for printing the values and key in different

    
}
// output
//IN :- India
// USA :- United State Of America
// Fr :- France

const myObject = {
    'Game1': 'NFS' , 
    'Game2': 'spiderman'

}

// for (const [key , values] of myObject) {
//     console.log(key , `:-` , values);
    
// }

//Object is not an iterable

