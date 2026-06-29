//Create an object for a student with name, age, isEnrolled
let student = {
    name: "nivi",
    age: 21,
    isEnrolled: true,
}

//can an object key be a no or boolean
//Ans:yes


//Access the value of first name from this object
const user = {
    "first-name": "navya"
}
// console.log(user.first-name);//wronnnnnnnnnnnnngggggggggg
console.log(user["first-name"]);//righttt
console.log(student.name);



//given a dynamic key let key = "age", how will u access the key
let key = "age";
const user2 = {
    [key]: 21
}
console.log(user2[key]);



//destructure the city and lat from the location object above
const locations = {
    city: "Delhi",
    coordinates: {
        lat: 23.2,
        lng: 77.4,
    }
}
let {city} = locations;
let {lat} = locations.coordinates;
console.log(city);
console.log(lat);


//Destructure the key first-name as a variable firstName.
const user3 = {
    "first-names": "navya"
};
let {"first-names": firstNames} = user3;
console.log(firstNames);

let newObj = console.log(Object.entries(user3).forEach(function(val){
    console.log(`${val[0]} : ${val[1]}`)
}))
console.log(newObj);