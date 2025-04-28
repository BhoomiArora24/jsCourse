const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: 'ruby',
  swift: 'swift by apple'
};

for (const key in myObject) {
  console.log(key);
}

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const arr=[1,2,3,4,5];
//for in works on arr but arr is not iterable aned it is made for object like things which has its property nname also along with it
for (const key in arr) {
  console.log(arr[key]);
}

// const map = new Map();//not iterable so cannot work with forin coz map has internal iterable func
// map.set('IN', "India");
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('FR', "France");

// for (const key in map) {
//   console.log(key);
// }