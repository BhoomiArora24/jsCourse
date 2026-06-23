//DESTRUCTURING 
let arr = [1, 2, 3, 4, 5];
let [a, b, ,c] = arr;
//a = 1;
//b = 2;
//c = 4;

//DESTRUCTURING SPREAD OPERATOR
//JavaScript does not create a new array. Instead, arr2 gets the reference (memory address) of the same array.
//Ex: ---------------------------------
let arrss = [1, 2, 3];
let arrss2 = arrss;

arrss2.push(4);

console.log(arrss); // [1, 2, 3, 4]
console.log(arrss2); // [1, 2, 3, 4]



//-------------------------
let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [...arrs];// now the copy is given as all the elements of arrs and spreaded to arr2