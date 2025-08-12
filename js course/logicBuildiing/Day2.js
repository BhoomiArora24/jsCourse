// Dynamic Object Filtering (Search Feature Simulation)
// You have an array of objects representing products:

// Task:
// Write a function searchProducts(query) that returns all products whose name contains the search query (case-insensitive).

const products = [
  { id: 1, name: "Apple iPhone", price: 799 },
  { id: 2, name: "Samsung Galaxy", price: 699 },
  { id: 3, name: "Google Pixel", price: 599 },
  { id: 4, name: "OnePlus Nord", price: 399 }
];

function searchProducts(query){
    return products.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase())
    ) 
}

console.log(searchProducts('oo'));

// Debounced Button Click Counter (Interview UI Logic)
// You’re building a UI where a button should update the click count, but prevent rapid clicks from counting unless 500ms have passed since the last valid click.

// Example behavior:

// If user clicks quickly 3 times within 500ms, it counts as 1 click.

// If they wait >500ms before next click, it increments again.

// Write a function setupDebouncedCounter() that returns a click() method to simulate this.



function setupDebouncedCounter(){
   let count = 0;
   let lastclicked = 0;
   function click (){
    const now = Date.now();
    if(now- lastclicked >500){
      count++;
      lastclicked = now;
    console.log(count);
  }
  else{
    console.log(count);
  }
   }
   return {click};
}

const counter = setupDebouncedCounter();
counter.click(); 
counter.click(); 
setTimeout(() => counter.click(), 600);