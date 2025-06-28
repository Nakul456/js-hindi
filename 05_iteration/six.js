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

const books = [
    { title: 'Book One' , genre: 'Fiction', publish: 1980 , 
    edition: 2004
    },
    { title: 'Book Two' , genre: 'Non-Fiction', publish: 1992 , 
    edition: 2008
    },
    { title: 'Book Three' , genre: 'History', publish: 1999 , 
    edition: 2007
    },
    { title: 'Book Four' , genre: 'Non-Fiction', publish: 1989 , 
    edition: 2010
    },
    { title: 'Book Five' , genre: 'Science', publish: 2009 , 
    edition: 2014
    },
    { title: 'Book Six' , genre: 'Fiction', publish: 1987 , 
    edition: 2010
    },
    { title: 'Book Seven' , genre: 'History', publish: 1986 , 
    edition: 1996
    },

    { title: 'Book Eight' , genre: 'History', publish: 2011 , 
    edition: 2016
    },

    { title: 'Book Nine' , genre: 'Non-Fiction', publish: 1981 , 
    edition: 1989
    },
];

// const userBook = books.filter( (bk) => bk.genre === 'History')
// const userBook = books.filter( (bk) => bk.publish ===1986)

// const userBook = books.filter( (bk) => bk.publish >= 2000)
const userBook = books.filter( (bk) =>{ 
    return bk.publish >= 2000 && bk.genre === 'History'
})

console.log(userBook);




