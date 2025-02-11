//reduce-transforms an array into single element
const myNums = [1, 2,3];

myTotal = myNums.reduce( function (acc, currval) {
  console.log(`acc : ${acc} and currval: ${currval}`)
  return acc + currval;
}, 0)

//through arrow function
// myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)

console.log(myTotal);


const shoppingCart = [
  {
    itemName:'jsCourse',
    price: 2999
  },
  {
    itemName:'DSA',
    price: 1999
  },
  {
    itemName:'AI-ML',
    price: 7999
  },
  {
    itemName:'DataScience',
    price: 12999
  },
  {
    itemName: 'DataAnalyst',
    price: 6999
  }
]

shoppingList = shoppingCart.reduce( (acc, currVal) => currVal.price+ acc, 1000);
console.log(shoppingList);