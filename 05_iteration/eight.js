const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc,currval) {
    console.log(`acc:${acc} and currval:${currval}`);
    
    return acc + currval
}, 0)


// const myTotal = myNums.reduce( (acc , curr) => acc + curr , 0)



console.log(myTotal);

const ShoppingCart = [
  {
    itemName : "JS-course",
    price: 2999
  },
  {
    itemName : "cpp-course",
    price: 12999
  },
  {
    itemName : "java-course",
    price: 5999
  },
  {
    itemName : "python-course",
    price: 999
  },

]

const pricetopay=ShoppingCart.reduce ( (acc , item) => acc + item.price, 0)

console.log(pricetopay);

