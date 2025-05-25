
// getOwnPropertyDescriptor ----Shows hidden rules (can it be changed? shown? deleted?)

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);


// You can't change Math.PI (not writable)
// 🙈 It won’t show up in loops (not enumerable)
// 🛠️ You can’t delete or modify its settings (not configurable)



// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);



const chai={
    name : 'ginder Chai',
    price : 250,
    isAvailable : true,



    orderChai(){
        console.log('code ft skta h ab')//because of function used here
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
    enumerable : true 
});

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// TypeError: chai is not iterable
// for (let [key, value] of chai) {
//     console.log(`${key} : ${value}`);
// }


//error corrected through Object.entries
for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){//removes the display of function
        console.log(`${key} : ${value}`)
    }
    
}
