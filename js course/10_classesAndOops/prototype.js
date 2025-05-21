// let myName = "Navya     ";
// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(myName.truelength);


let myHeroes = ["Thor", "Spiderman"];

let heropower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderpower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}


// now if we add the prototyope directly in the object hen it will be added to arrays, strings, functions automatically coz in js they are also a type of object
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}


// prototype added in array will not be added in object
Array.prototype.navya = function(){
    console.log(`navya is present where?`);
}

myHeroes.navya();
// heropower.navya();-- so prototype added in array will not be added in object

heropower.hitesh();

myHeroes.hitesh();


//to link objects

const User = {
    name: "Navya",
    email: "navya@google.com"
}
const Teacher = {
    makeVedio : true 
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignaments: 'JS Assignments', 
    fullTime: true ,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;



//modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength();

"        hitesh       ".trueLength();