// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);


//in the above prolem we get the copy of the ordinal value this is calle stack

let Userone = {
    email:"nakulgoogle.com",
    upi:"nakul@avd"
}

let Usertwo = Userone;
Usertwo.email = "jiteshgoogle.com"
console.log(Usertwo.email);
console.log(Userone.email);

//In the above is the example of heap in this there is no copy of the data if the value is change then there is the change in the op