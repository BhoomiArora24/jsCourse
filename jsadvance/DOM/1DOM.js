//3 methsods of selecting DOM
//----------
let abcd = document.getElementById("abcd");
console.dir(abcd);// dir -- make sit in opening form


//---------------
let cd = document.getElementsByClassName("cd");//structured like array but is not array
console.dir(cd);


//-------------
//mainly used
let wr = document.querySelector("h1");//will always select 1st one no matter how many are there
console.dir(wr);


let h2 = document.querySelector("h2");
// h2.textContent = "hello nivi kaise hoo?";
// h2.innerHTML = "m badiya hu";//it contains the html in it we can also add or specify any html tag in it
// h2.textContent = "m badiya hu";//same as textContent changes text

h2.innerHTML = "<i>hey</i>"
h2.hidden = true;// it hides the text ven from the inspect code