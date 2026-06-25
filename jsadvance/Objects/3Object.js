//Deep cloning

const user = {
    name: "Navya",// gives real copy for this
    address: {
        city: "NW Delhi",// gives reference for all the nested objects;
        pin: 110089,
        location: {
            lat: 23.2,
            lng: 77.4,
        },
    },
}

// let user2 = {...user};
// user2.address.city = "Delhi";

// console.log(user2);
// console.log(user);
//as we can see that we changes the city of just user2 but the city of user also got changed because they dont give the real copt for nested objects they pass reference for them which is never actually copied



//CORRECT WAY
//let's conver it in string first
let user2 = JSON.parse(JSON.stringify(user));

user2.address.city = "Delhi";

console.log(user2);
console.log(user);
// it will be copied here not passed htrough reference as it is first converted into string first then converted into json


//OPTIONAL CHAINING
console.log(user?.addresses?.city);
// through optional chaining if the value is not availaible it gives undefined as output instead of error


//COMPUTED PROPERTIES
let role = "admin";

const users = {
    name: "Navya",
    address: {
        city: "NW Delhi",
        pin: 110089,
        location: {
            lat: 23.2,
            lng: 77.4,
        },
    },
    [role]: "nivi"
}
console.log(users);
//Output: 
// {
//   name: 'Navya',
//   address: { city: 'NW Delhi', pin: 110089, location: { lat: 23.2, lng: 77.4 } },
//   admin: 'nivi'
// }