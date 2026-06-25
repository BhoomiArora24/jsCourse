//Object is created when we want to store the details about one entity

let obj = {
    name: "navya",
    age: 21,
    khanna: "Rajma Chawal"
};

//.notation
obj.age
obj.name
//OR
obj['khanna']

//why do we have this other square method also obj['khanna']
//explanation
//.notation will literally access the word written just like this
let aa = "name";
console.log(obj.aa);
//this creates an issue is there is no aa in obj so it will give undefined as output
//but if we see
let bb = "age";
console.log(obj[bb]);
//now this will access age of obj as here bb will be able to contvert its value which will become age so in output we will get the age

//Key-Value structure
let obj2 = {
    name: "Navya"
}