//VERY IMPORTANT

var obj = {
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

//ab because hme check krna h ki object h array h ya no h to lekin null ka bhi type obj hi hota h to ab kaise check hoga
//sol: null === null is true to agar true aega that means it is a null value to use sidha return krdo means jha se aya that vhi bhejdo hme nhi chahiye

//ab type of array bhi obj h and type of objuect bhi object h to kaise find karay ji konsa array h konsa obj h??
//Soll: Array/isArray([]) = gives true
//Array.isArray({}) = gives false
//it is very important to know coz agar apne array pas kiya hoga to v0o blank array pe copy bnaega otherwise object if object was passed

//to check keys: Object.keys([1,2,3,4])
//will gve the indexes ['0', '1', '2', '3']
//lly, Object.keys({name: "a", age: 21})
//will give name of properties 
//['name', 'age']

//ab hme ni pta name me kya h vo obj bhi ho skta h array bhi ho skta  ya kuch bhi 

function makeDeepCopy(){

    //ye code vapas bhejta h agar object ya array ni h
    if(typeof obj !== 'object' || obj === null){
        return obj;
    }

    //ye vo part h jo deep copy krta h
    var copiedVal = Array.isArray(obj) ? [] : {};//ab ye array h ya obj it will be stored in copiedVal
    //to copied val me ek blank object h coz hmne ek object pass kiya tha

    //ab hme keys chahiye jinhe hme copy krana h
    var keys = Object.keys(obj);
    //keys is wakt array h jisme name age h kyoke vo object h to isliye properties were passed

    for(let i = 0; i < keys.length; i++){
        obj[keys]
    }
}

makeDeepCopy({name: "a", age: 21})