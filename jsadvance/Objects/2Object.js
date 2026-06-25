const user = {
    name: "Navya",
    address: {
        city: "NW Delhi",
        pin: 110089,
        location: {
            lat: 23.2,
            lng: 77.4,
        },
    },
}

console.log(user.address.location.lng);
//or
let {lat, lng} = user.address.location;//destructuring 
//it is used when there is too much nesting

//looping in objects
let obj = {
    name: "navya",
    age: 21,
    email: "test@example.com"
}

for(let key in obj){
    // console.log(key);it is printing only the keys name, age, email
    console.log(key, obj[key]);
}

//to create an array of all the keys of obj
console.log(Object.keys(obj));

//to create an array of arrays storing key +  values
console.log(Object.entries(obj));
//[ 'name', 'age', 'email' ]
// [ [ 'name', 'navya' ], [ 'age', 21 ],[ 'email', 'test@example.com' ] ] 
//like this 

// let obj2 = {...obj};
// console.log(obj2);


//assign also used for coping just like spread operator above
let obj2 = Object.assign({}, obj);
console.log(obj2);
//for adding some key value in the copy of obj
let obj3 = Object.assign({gender: "female"}, obj); 
console.log(obj3);