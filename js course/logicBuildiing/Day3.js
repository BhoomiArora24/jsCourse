// 1. Email Domain Extractor (Basic String Handling)
// Write a function that takes an email address and returns the domain (everything after @).
// Example:

// getDomain("nivi@example.com"); // "example.com"

const email = "navya24@gmail.com";

function extracter(){
    let num = email.indexOf('@');
    return (email.substring(num + 1 , email.length))
}

console.log(extracter());


// 2. Cart Price Calculator with Discount (Array Reduce + Conditional Logic)
// Given a cart array of objects with price and quantity,
// Calculate the total
// If total > 500, apply a 10% discount.
// Example:
// cartTotal([
//   { price: 200, quantity: 2 },
//   { price: 150, quantity: 1 }
// ]);
// // Output: 495  (before discount: 550, after 10% discount)

let yourCart = [
                { price: 200, quantity: 2 },
                { price: 150, quantity: 1 }
                ];

function totalOfItem(){
    let total = yourCart.reduce( (acc, curVal) => {
        return acc+(curVal.price * curVal.quantity )
    },0);
    return total >500 ? (total + (total * 0.1)) : total;
}

console.log(totalOfItem());