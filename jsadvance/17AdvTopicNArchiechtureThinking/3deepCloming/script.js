//shallow and deep copy

var obj = {
    name: "Navya",
    age: 21,
}

var obj2 = obj;//we can't tale copy of an object like this
//why??

//necause it actually never copies it is actually sending the reference of obj to obj2
//so it never actually copies the obj instead obj2 starts pointing to obj

obj2.name = "Nivi";
console.log(obj);
console.log(obj2);
//name changes for both of them because obj2 does not have its own object it is pointing to the object of obj and changing it over there

var objj = {
    name: "navya",
    age: 21
}

var objj2 = {...objj};//spread operator
objj2.name = "Nivi";
console.log(objj);
console.log(objj2);

var objjj = {
    name: "navya",
    age: 21,
    social: {
        facebook: {
            ac1: "hey@gmail.com",
            ac2: "hlo@gmail.com"
        },
        twitter: {
            free: {
                ac1: "free@gmail.com"
            },
            paid: {
                ac1: "paid@gmail.com"
            }
        }
    }
}

var objjj2 = {...objjj};
objjj2.social.facebook.ac1 = "changed";

console.log(objjj.social.facebook.ac1);
console.log(objjj2.social.facebook.ac1);
//it got changed for both the objjj



//Shallow Copy-- hota hai jab aap kisi object ko copy karein with Object.assign ke through ya fir spread operator ke through in dono hi cases m top level props to copy hojate h par kisi bhi nested object ki props copy hone ki jagah fir se reference pass krdeti h



//deep copy
var objjjj = {
    name: "navya",
    age: 21,
    social: {
        facebook: {
            ac1: "hey@gmail.com",
            ac2: "hlo@gmail.com"
        },
        twitter: {
            free: {
                ac1: "free@gmail.com"
            },
            paid: {
                ac1: "paid@gmail.com"
            }
        }
    }
}

var b = JSON.parse(JSON.stringify(objjjj));
//why stringify --- object ko agar ham string bna de to it will workb but can't make it a full string coz it will loose its properties therefore, 
//we use JSON.stringify -- it will make it a json string so if we want we can copy it in a way it will hold a stringify version of obj
//we can also convert it back into rteal object using JSON.parse and rhe stringified version will remove and will be converted into real object again

//as it bace a string so it couldn't pass the reference there it was able to copy it deeply
//then converted into real object

b.social.facebook.ac1 = "heyyyyyy";
console.log(objjjj.social.facebook.ac1);
console.log(b.social.facebook.ac1);