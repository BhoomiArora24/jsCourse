let email = document.querySelector("#email");
let password =  document.querySelector('#password');
let form = document.querySelector('#form');

form.addEventListener('submit', function(dets){
    dets.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=\[\]{};':"\\|,.<>\/~`])[A-Za-z\d@$!%*?&^#()_+\-=\[\]{};':"\\|,.<>\/~`]{8,}$/;

    const emailans = emailRegex.test(email.value);
    let passAns = passwordRegex.test(password.value);

    let isValid = true;

    if(!emailans){
        document.querySelector('#emailError').textContent = "Please enter a valid email address.";
        isValid = false;
    }
    else{
        document.querySelector('#emailError').textContent = "";
    }

    if(!passAns){
        document.querySelector('#passwordError').textContent = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
        isValid = false;
    }
    else{
        document.querySelector('#passwordError').textContent = "";
    }

    if(isValid){
        document.querySelector('.resultMessage').textContent = "Form submitted successfully!";
        email.value = "";
        password.value = "";
    }
    else{
        document.querySelector('.resultMessage').textContent = "There are errors in the form. Please fix them and try again.";
    }
})