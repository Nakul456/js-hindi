// const coding = ["Js", "ruby", "Java", "Python", "cpp"]

// const values = coding.forEach( (item) => {
//        console.log(item);
//        return item
// })

// console.log(values);

// FOR EACH FUNCTION DOES NOT GIVE ANY RETURN VALUE

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//while using the above syntax we have to write the return keyword or then it will give the o/p undefined
// const newNums = myNums.filter ((num)=> {
//      return num > 4
// })

// console.log(newNums);



// const newNums = myNums.filter ( (num) => num > 4 )
// console.log(newNums);


// using with foreach

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

// console.log(newNums);








