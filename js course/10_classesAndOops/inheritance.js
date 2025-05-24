// User is the base class (or parent class).
// It has:
// A constructor that sets the username property.
// A method logMe() that prints the username

class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}




// Teacher inherits from User using extends.
// Inside its constructor, it does something important:
// It uses **super(username)** to call the parent class's constructor. This is required before using this in the child class.
class Teacher extends User{
    constructor(username, email, password){
        // The super keyword is used to call the constructor (or methods) of the parent class.
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourses(){
        console.log(`Courses added by ${this.username} `);
    }
}




// chai is a Teacher, so it can use both:
// Its own method: addCourses()
// Inherited method: logMe() from User
// MasalaChai is a plain User, so it:
// Can use logMe()
// Cannot use addCourses() → it would throw an error

const chai = new Teacher("chai", "chai@gpt", "123");
chai.addCourses();
chai.logMe();


const MasalaChai = new User("masalachai");
// MasalaChai.addCourses(); -----error
MasalaChai.logMe();


console.log(chai === MasalaChai);
//false



console.log(chai === User);
//false



console.log(chai instanceof User);
//true

