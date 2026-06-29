//create a reusable discount calculator using h.o.f

function discountCalc(discount){
    return function(price){
        return price - price * (discount/100);
    }
}

let discounterTen = discountCalc(10);//discounterTen will run the return function
console.log(discounterTen(1200));
let discounterTwenty = discountCalc(20)
console.log(discounterTwenty(1500));