// singleton 
//if we use the literals then it will not generate the singleton 
//and in the const method it will generate the singleton
Object.create 

// object literals

const mySum = Symbol("key1")

const Jsuser = {
    "full name" : "Hitesh Choudary",
    [mySum] : "mykey1",
    name : "Hitesh",
    age : 16,
    location : "jaipur",
    email : "hitesh@gamil.com",
    isLoggedIn : false
}


console.log( Jsuser.age);
console.log( Jsuser['age']);
console.log( Jsuser["full name"]);
console.log(  Jsuser[mySum]);

Jsuser.age = "48"

Jsuser.email = "nakuoojfoisdj"
console.log(Jsuser);

