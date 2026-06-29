let arr = [1,2,3,4,5];
console.log(arr[0]);//access array
arr[2] = 12;//Modify array
console.log(arr[2]);

let arrr = new Array(5);//for creating an empty array with 5(or whatever length)


//Methods
arr.push(7000);//adds the element in last
console.log(arr[5]);

arr.pop();//removes the element from the end
console.log(arr[5]);

arr.shift();//removes the element from start
console.log(arr[0]);

arr.unshift(1);//adds the element in start
console.log(arr[0]);

arr.splice(2,1);//2 is 2nd index(starting index) and next 2 is how many values to be removed
console.log(arr);

let newarr = arr.slice(0, 3);//it doesn't changes the arr it gives the return copy
//it will start from 0th index and will give till 2nd index as it will not include the last 3rd index
//IT DOES NOT CHANGES THE MAIN ELEMENT AT ALL ,ALL THE CHANGES THAT HAPPEN HAPPENS IN THE NEW ELEMENT FORMED JUST LIKE "newarr" 
console.log(newarr);


//reverse- it changes the main array only no coppy is made
let marks = [10,20,30,40,50];
marks.reverse();
console.log(marks);

//SORT- it has a different syntax
//it accepts a function only
//need to give two value in function as a parameter
//it is changing the orignal array only here until we store it all into a variable

//BIG BLUNDER IN SORT
//WHENEVER WE USE DIRECT .SORT() WITHOUT FUNCTION IF WE ARE TRYING TO SORT NUMERICAL VALUES THIS WAY EX:[100, 20, 10].SORT() IT CONVERTS NUMERICAL VALUE INTO A STING WHICH DOES NOT ALLOWS TO SORT THE ARRAY BUT IF IT THE ARRAY HAS STRING VALUE IN IT TO SORT THEN IT WORKS FINE -- TO FIX WE NEED TO USE COMPARE FUNCTION


let hii = [29,38,47,56,15];
hii.sort(function(a,b){
    // return a-b;//for ascending order arrangement
    return b-a;//for descending order arrangement
})

console.log(hii);