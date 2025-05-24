const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);



const chai={
    name : 'ginder Chai',
    price : 250,
    isAvailable : true,



    orderChai(){
        console.log('code ft skta h ab')
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// Object.defineProperty(chai, 'name', {
//     writable : false,
//     configurable : false
// });

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// TypeError: chai is not iterable
// for (let [key, value] of chai) {
//     console.log(`${key} : ${value}`);
// }


//error corrected through Object.entries
for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
    
}
