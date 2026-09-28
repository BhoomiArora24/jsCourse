//debouncing- aap koi action kar rahe ho and aap ye nahi chahte har action pe kuch ho jab bhi mere action ke bich m koi specific gap aye to fir reaction perform

//debounce -- ek delay btaoge tum utna delay jab bhi ayega action ka reaction milega

// document.querySelector("input").addEventListener("input", function(){
//     console.log("heybdhjndjkcn");//hr ek action pe it is giving this reaction jaise I'm writing hey so it will give the reaction indivially for every character so it will console three times for hey
// })

let input = document.querySelector("input");

//2
function debounce(fnc, delay){//debounce function jb pehli bar chla hoga to
    let timer;//a variable got created named timer whose value is undefined
    return function(...args){//now debounce returned this function ye function niche EventList.. statement me debounce functionn ki jagah chla gya hoga
        clearTimeout(timer);//hr bar previous timer ko delete krta h
        timer = setTimeout(function(){//and nye time ko save krte rehte h
            fnc(...args);//this function gets called after the delay   ye fnc vo function h jo user ne provide kiya tha as the argument while adding an eventListener with dets coming in args
        }, delay)
    }
}

//3
//what is (...args)??
//jb bhi hm event Listener add krte h and usme koi bhi event likhte h (submit, click, input etc..) to uske sath m ek funtion bhi likhte h which occurs whenever the written event occurs and us function me we accept some dets if the event is inpuut or something like that we accept its dets eg. function(dets){} so as at the place of debounce function its returned function runs therefore, args are those dets that the function is accepting



//throttle - interval par chalunga action agar hota rha to and apne ek interval btaya to utne interval me apka event chlega

function throttle(fnc, delay){
    let timer = 0;
    return function(...args){
        let now = Date.now();//gives the correct current milliseconds
        if(now - timer >= delay){//jb cuurent millisecond - timer >= delay(1000)
            timer = now;//timmer will be updated as current millisecond
            fnc(...args);//now it will run what the user says to do because this function is taken as an argument when called
        }
    }
}

//1
input.addEventListener("input", throttle(function(){
    console.log("hey")//now jb 1sec tk koi action ni hoga tbhi revert ayega,,,, but here because we have round breckets after debounce this means that debounce function is getting called here only
    // now as it is reffering to the debounce function so whatever the debounce function will return will happen here (coz return hone wali chiz vhi aegi jha function call hua tha), therefore, the statement will be replaced by ---input.addEventListener("input", returnedFunction--- internally in js
    //to kbhi bhi koi input kroge to returned function chlega
}, 1000
));
