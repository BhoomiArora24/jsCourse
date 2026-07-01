let abcd = document.querySelector('#abcd');

abcd.addEventListener("click", function(dets){
    //this param in function -- dets is called event Object
})



//----  event bubbling-----------
//jispe event ayega agar uspar listener nahi hua to uske parent par listener dhundega aur aise krte krte upar ki taraf move karega

// main div
//   nav div-- agar ispe event nahi mile so it will move to main div
//     link
//     button -- agar ispe event nahi mile so it will move to nav div

document.querySelector('#nav').addEventListener("click", function(){
    alert("clicked");
})
//event jha par bhi occur hota h agar use element ke pas listener nhi hua to vo bubble krke parent pe jaega if it finds the listener there so it runs there
//and it's not just that if the listener works still it will go on its parent listener and that listener will also work and so on



//ex of event bubbling listener applied on parent but working on every child
document.querySelector("ul").addEventListener("click", function(dets){
    dets.target.style.textDecoration = 'line-through'
})