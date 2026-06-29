//browser mein page pr koi bhi change kro even raise hua
//mouse move event raised
//click- event raised
//type- event raised

//kuch screen pr ho and u have to give reaction then apko event handle krna ana chahiye

//event means koi action hua on screen

//event listener-- means apne koi action ka reaction diya
//ex- kisi text pe click kiyya event raised but us click se kuch change hua like text color change hua that is event listener

//click
let h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
    h1.style.color = "red";
});

let p = document.querySelector("p");
// p.addEventListener("click", function(){
//     p.style.color="green";
// })

//create function then pass it in event coz it wont create fuss while removing
function dblClick(){
    p.style.color="yellow";
}
p.addEventListener("dblclick", dblClick)


//REMOVING EVENT LISTENER
p.removeEventListener("dblclick", dblClick)



//input
document.querySelector("input").addEventListener("input", function(data){
    if(data.data !== null){
        console.log(data.data);
    }
})
//among all the methods data is storing the text which we are writing and whenever we will backspace it will become null so it will print null at that time so for that u need to add conditioning in it
