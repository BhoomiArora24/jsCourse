class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this.__email.toUpperCase();
    }

    set email(value){
        this.__email = value;
    }


    get password(){
        return this._password.toUpperCase();
        
    }

    set password(value){
        this._password = value;

    }
}

const navya = new User("navya.ai", "abc");
console.log(navya.password);
console.log(navya.email);