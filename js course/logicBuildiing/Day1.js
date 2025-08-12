// Logic 1: Search Filter
// Problem:
// You have an array of product objects. Write a function searchProducts(query) that returns all products whose name contains the search term (case-insensitive).

const products = ['eraser', 'pencil', 'sharpner'];

function query(searchTerm){
    return products.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
}

console.log(query('pen'));

// Logic 2: Form Validation
// Problem:
// Given an object with form data, write a function validateForm(formData) that checks:

// Name should not be empty

// Email should contain @ and a .

// Password should be at least 6 characters

// Return true if valid, otherwise false.

const form ={
    name :"Navya",
    email:"aroranavya@gmail.com",
    password: "navya123"
}

function validateForm(formData){
    if(formData.name.length > 0 && formData.email.includes('@') && 
formData.password.length >= 6
){
return true
}
else{
    return false
}
        
}

console.log(validateForm(form));