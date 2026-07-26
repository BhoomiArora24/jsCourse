//Extends & Super

//a class already created we create a new class 
// the new class can use all the values of previous class and can carry some of its own values too


class User{
    constructor(name, address, username, email, role){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }

    checkRole(){
        console.log(`you are a ${this.role}`);
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
}

//admin class vo sb rkhi h jo User k pas h
class Admin extends User{
    constructor(name, address, username, email){//jo jo parent ne manga h vo sb hmko yha bhi pass krna pdega as param
        super(name, address, username, email);//callig parent k constructor ko//ate hi all this will got to parent constructor

        //admin ki khud ki chize
        this.role = "admin";
    }

    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        })
    }
}

let u1 = new User("Navya", "Delhi", "Navya24", "navya@gmail.com");

let u2 = new User("Nivi", "Delhi", "Nivi24", "nivi@gmail.com");

let a1 = new Admin("admin1", "India", "adminnnnnnnnnnnn", "a@a.a");