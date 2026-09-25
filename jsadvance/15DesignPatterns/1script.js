//module pattern

//module pattern ek design pattern h jisme ham apna code ek self executing function (IIFE) ke andar likhte hain, taki variables aur functions private rhe
//Iske andar se hum sirf wahi cheezen return krte hain jo bahar use krni hain
//Is pattern ka main fayda hain data hiding(encapsulation) aur clean structure , taki code secure, managable and reusable ban sake

//iife
let fnc = (function () {
    return 12;//isme hm jo bhi return krenge vo jake fnc me store hoga
})();

console.log(fnc);


let bank = (function(){//coz all these functions are in iife so it can't be accessed outside the iife function
    let bankBalance = 12000;//private variable, can't be accessed

    function checkBalance(){
        console.log(bankBalance);
    }

    function setBalance(val){
        bankBalance = val;
        console.log(bankBalance);
    }

    function withdraw(val){
        if(val <= bankBalance){
            bankBalance -= val;
            console.log(bankBalance);
        }
    }

    return{//an object is reurned so this will be stored in bank
        check: checkBalance, 
        set: setBalance, 
        draw: withdraw
    }//jo bhi access krna h bahar vo return statement m bahar daldo
})();

console.log(bank);
bank.draw(1000);
console.log(bank.check());
console.log(bank.set(50000)); 