//2000 line code - heavy

//jo code jb zarurat pdti h use tb load krte h

const btn = document.querySelector("button");
btn.addEventListener("click", async function(){
    let heavy = await import("./heavy.js")//ab code ya file kitni bhi bdi hoskti h to use load krne m, time bhi lgega that is why it is asynchronous(means if this task takes a lot time then it will execute other task meanwhile) , but we want ki pehle ye line chile no matter how much tim3e it takes uske bad hi age kqa code chlega so we use await and because we're using await need to put async parent function k age
    heavy.veryHeavy();
})

//code splitting - hmare code ko split krke alag files m daldiya or jb jiski zarurat pdi tb use load krliya