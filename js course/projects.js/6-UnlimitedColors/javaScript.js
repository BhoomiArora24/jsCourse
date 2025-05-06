//generate a random color

const randomColor= function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i<6; i++){

        color += hex[Math.floor(Math.random()*16)];
    }
        return color;
    
};
    console.log(randomColor());

    let IntervalId;
    const startChangingColor=function(){

        if(!IntervalId){
            IntervalId= setInterval(constBgColor, 1000);
        }
        //first read line 33 then read this comment for better understanding
        // it again starts giving values or may be color u can say

        function constBgColor(){
            document.body.style.backgroundColor= randomColor();
        }
         
    };

    const stopChangingColor=function(){
        clearInterval(IntervalId);
        IntervalId= null;
        //null is used for the proffessionialism of code so as intervalId is cleared it gets valued to null but because of this we cant start it again once stopped 
        // so here the sol. comes using if statement above
    };


    document.querySelector("#start").addEventListener('click', startChangingColor);

    document.querySelector("#stop").addEventListener('click', stopChangingColor);
