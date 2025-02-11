//array
//enables storing a collection of multiple items under a single variable name
//resizable and can contain a mix of different data types
//are zero-indexed
// array-copy operations create shallow copies

const myArray = [1,2,3,4,5]//can be string number or both
const myHeroes=["shahid","sid"]
const array2= new Array(1,2,3,4)
console.log(myArray[0]);

//Array Methods

myArray.push(6);//adds the pushed element in the last
console.log(myArray);
myArray.push(7);
console.log(myArray);
myArray.pop();//removes the last element
console.log(myArray);
myArray.unshift(9);//adds the element at 0 index and shifts the remaining elements
console.log(myArray);
myArray.shift()//removes unshift
console.log(myArray);

console.log(myArray.includes(9));//output in boolean true/false
console.log(myArray.indexOf(3));
const newArr= myArray.join();//it changes the datatype to string
console.log(newArr);
console.log(typeof newArr);

//slice, spice
console.log("A", myArray);
const myn1 = myArray.slice(1,3);
console.log(myn1);
console.log("B", myArray);
const myn2= myArray.splice(1,3);//includes the range and removes the spliced elements from main array
console.log("c",myArray);
console.log(myn2);