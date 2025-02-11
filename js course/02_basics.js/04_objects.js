// const tinderUser = new Object()
//another way using constructor
const tinderUser={};

tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.isLoggedIn= false;
console.log(tinderUser);

const regularUser = {
  email: "navya24@gmail.com",
  fullName: {
    userfullname:{
      firstName: "Navya",
      lastName: "Arora"
    }
  }
}

console.log(regularUser.fullName);

const obj1={1: "a", 2: "b", 3: "c"};
const obj2={4: "c", 5: "e", 6: "a"};

// const obj3= {obj1, obj2};
// const obj3= Object.assign({}, obj1, obj2);//places all unique key, {} is used as target and all others are zero
const obj3 = {...obj1, ...obj2}//spread method used

console.log(obj3);

const user =[//many objects in an array
  {
    id: 1,
    email: "nav24@gmail"
  },
  {
    id: 1,
    email: "nav24@gmail"
  },
  {
    id: 1,
    email: "nav24@gmail"
  }
]

console.log(user[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));//its output is of array datatype so we can use loops and many more on it
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//destructuring of object
const course ={
  courseName: "javaScript",
  price: "99",
  courseInstructor: "hitesh"
}

// course.courseInstructor- a little irritating to use every time

const {courseInstructor: instructor} = course;//this is the way to destructor
console.log(instructor);

// API- how to write the values in the backend //values are in JSON FORMAT
//we get API  as an object and in an array carrying many objects in it
//object is always sent in JSON FORMAT only in whole API industry whether writing in PHP or any other language 


//JSON is an object with no name
// {
//   "name":"navya",
//   "courseName" : "javaScript",
//   "price": "free"
// }