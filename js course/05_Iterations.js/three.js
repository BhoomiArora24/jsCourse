//for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World";

for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
  console.log(`Each char is: ${greet}`)
}

//maps- it is an object that holds the key value pairs, no duplicate value, all unique values, ordered

const map = new Map();
map.set('IN', "India");
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");

console.log(map);

for (const key of map) {//it displays the whole array
  console.log(key);
}
for (const [key, value] of map) {
  console.log(key, ':-', value);
}

//not working as myObject is not iterable
const myObject={1:'a', 2:'b', 3:'c'}

for (const obj of myObject) {
  console.log(obj);
}