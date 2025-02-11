const marvel_heroes =["sid", "shahid", "navya"];
const dc_heroes =["superman", "flash", "batman"];
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);

const all_heroes= marvel_heroes.concat(dc_heroes);//concatenates the whole array as one with no array inside it
console.log(all_heroes);

//spread- spreads the whole array elements alone and gives the output as one single array
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);//makes it a whole one array and infinity checks the depth we can also give the no of 
//times we want to flatten the array but infinity checks it by itself
console.log(real_another_array);

console.log(Array.isArray("Navya"));
console.log(Array.from("Navya"));
console.log(Array.from({name:"Navya"}));//interesting for interviews
//gives empty array coz vo use convert ni kr pa ra so we should tell ki 
//keys ka array bnao ya kiska or agr nhi bn pata so it gives an empty array

let score1= 100;
let score2= 200;
let score3= 300;

console.log(Array.of(score1, score2, score3));//makes one array of all three together