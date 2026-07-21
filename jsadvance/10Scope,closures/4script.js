//closures hote h functions jo ki kisi parent function k andar ho and andar wala function return hora ho, and returning function will use parent function ka koi variable

//benifits
//private variables can be created
//global pollution-- code me too many variables are there which is polluting the space to it helps with that

function abcd(){
    let a = 12;
    return function def(){
        console.log(a);
    }
}
//closures me hamesha pehli bar chlane par ek function milta h that is why we are saving it in fnc
let fnc = abcd();//when called here goes to abcd function creates memory for a then it returns a function which will remove abcdd function then how is it pring a because if abcd gets removed it's memory will also be removed --SEE HOW-- 
fnc();

//ye sach h function k khatam hone pe apka fnc and uske variables khtm hojaate hai , par jab bhi closure banta hai to apka fnc aur uske variables ka ek backlink(kind of copy) bnaya jata h(js creates it) and uska name hota h -- [[environment]]