function multiplyBy5(num){
    this.num = num;
    return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;//increases the value of those whoever calls
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);//increases the value of those whoever calls
}


//error:Cannot read properties of undefined (reading 'printMe')
// const chai = createUser("chai", 25);
// const code = createUser("code", 250);


//protypes are injected now
const chai = new createUser("chai", 25);
const code = new createUser("code", 250);

// how to use?
chai.printMe();