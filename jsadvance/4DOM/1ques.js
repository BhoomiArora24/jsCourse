//what is DOM?How does it representthe HTML structure?
//tree like structure, everything written in html everything becomes node

//q Name the types of nodes in dom?

//q What is the defference between element node and the text node?
{/* <p>jksdncjkdscn</p> */}
// p is element node and jkjndkcm is text node


//what does getElementByClassName return is it an array?
//NO it actually return html collection, list which looks very very similar to array but not actually array
let h1 = document.getElementsByClassName("cd");
console.dir(h1);


//q use querySelectorAll to select allbuttons with class "buy-now".
let buyButton = document.querySelectorAll(".buy-now");
console.log(buyButton)
