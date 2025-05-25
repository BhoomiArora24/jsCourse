// _ is used for private properties but # is also used for it under ES2022 


const User = {
    _email: 'acd@gmai',
    _password: '123456',



    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User);
console.log(tea.email);