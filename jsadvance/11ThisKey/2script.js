//this call apply bind

//function ko call krte wakt ap set kr skte ho ki uski this ki value kya hogi?

let obj = {
    name: "navya",
    age: 21
}
function abcd(){
    console.log(this);
}

abcd.call(obj);//always function is called --just to remember how to write

//apply -- kehta h ki ap sirf 2 param bhejo ge 1st ur obj 2nd array of all ur values
function defg(a, b, c){//ek se zada param
    console.log(this, a, b, c);
}

defg.apply(obj, [1, 2, 3]);//sended in an array


//bind(doesn't run)--jha bhi likho ge vha ek nya function de deta h , hmare function ko duplicate krke ek nya function dediya jha pe obj hmara this h
function hijk(a, b, c){
    console.log(this, a, b, c);
}

let fnc = hijk.bind(obj, 1, 2, 3);
fnc();