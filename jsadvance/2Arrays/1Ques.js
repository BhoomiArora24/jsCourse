//Add "Mango" at the end and "Pinapple" at thr beginning of this array

let fruit = ["Apple" , "Banana"];
fruit.unshift("Pineapple");
fruit.push("Mango");
console.log(fruit);

//Replace Banana with kiwi

fruit[2] = "kiwi";
console.log(fruit);

//Remove last elemment from this array
let numbers = [1, 2, 3, 4];
numbers.pop();
console.log(numbers);

//Insert red and blue at index 1 in this array
let colors = ["yellow", "green"];
colors.splice(1, 0, "Red", "Blue");
console.log(colors);

//Sort this array alphabetically
let names = ["Zara", "Arjun", "Mira", "Bhavya"];
names.sort().reverse();
console.log(names);


//use .map() to square each number
let nos = [1, 2, 3, 4, 5];
let newnos = nos.map(function(val){
    return val*val;
});
console.log(newnos);


//Use .reduce() to find the sum of the array
let redMethod = [10, 20, 30];
let ans = redMethod.reduce(function(accumulator, val){
    return accumulator+val;
}, 0);
console.log(ans);

//use .every to check are all the nos even
let reply = nos.every(function(val){
    return val%2 === 0;
});
console.log(reply);


//Destructure this array to get first name and last name
let fullName = ["Harsh", "Sharma"];
let[firstName , lastName] = fullName;
console.log(firstName);
console.log(lastName);



//Merge two arrays using spread operator
let a = [1,2];
let b = [3,4];
let c = [...a, ...b];
console.log(c);


//Add "India" to the start of this array using spread
let countries = ["USA", "UK"]
let newCountries = ["India", ...countries];
console.log(newCountries);



//Console this array properly not be reference
let hey = [1,2,3];
let you = [...hey];
console.log(you);