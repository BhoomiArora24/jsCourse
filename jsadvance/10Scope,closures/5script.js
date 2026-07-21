//use cases-- private counters , encapsulation

function countForMe(){
    let c = 0;//backlink creted//whenever runs it creates its own c
    return function(){//it remembers its own c
        c++;
        console.log(c);
    }
}

let fnc = countForMe();//it is having its own c
fnc();
fnc();
fnc();

let fnc2 = countForMe();//it is having its own c
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();




//encapsulation -hide main inner logic and to give access of only those things that are required

function clickLimiter(){
    let click = 0;
    return function(){
        if(click < 5){
            click++;
            console.log(`clicked: ${click} times`)
        }else{
            console.error("limit exceeded")
        }
    }
}

let fncc = clickLimiter();
fncc();
fncc();
fncc();
fncc();
fncc();
fncc();