//Task1
//select the heading of a page by ID and change its text to "Welcome to Sheryians!".

let h1 = document.getElementById("heyy");
h1.textContent = "Welcome to Sheryians!";
console.log(h1);


//task2
//Select all <li> elements and print their text using loop
let list = document.querySelectorAll("li");
list.forEach(function(val){
    console.log(val.textContent);
})


//when should u use textContent instead of innerText
//textcontent displays the whole text irresepective ot it is hidden or not
//innerText shows the text that  is not hidden



//Task3 
//Select a paragraph and replace its content with 
//<b>Updated</b> by javascript 
let p = document.querySelector("p");
p.innerHTML = "<b>Updated</b> by javascript";



//How do u get the src of an image using Javascript
let img = document.querySelector("img");
console.log(img.getAttribute('src'));
img.setAttribute("src", "https://i.pinimg.com/736x/d8/ec/2f/d8ec2f901aa4e993beddd1f3b11f345a.jpg");


//what does setAttribute do?
let a = document.querySelector("a");
a.setAttribute("href", "https://www.sheryians.com");



let div = document.querySelector("div");
div.setAttribute("tittle", "hey that's me");



// Can u remove an element using remove child()?
// document.querySelector("div").removeChild("p");


//list Item <li>New Task</li> and add it at the end of ul
let head = document.createElement("li");
head.textContent = "New Task"
head.style.color = "black"
document.querySelector("ul").append(head);




//Creates a new image element with a placeholder source add it at the top of a div
let imgg = document.createElement("img");
imgg.setAttribute("src", "https://i.pinimg.com/736x/77/e3/4a/77e34a1c214505230504e81a38dabbb9.jpg");
document.querySelector("div").prepend(imgg);
imgg.style.height= "300px";




//select the first item in a list and delete it from the dom
let lu = document.querySelector("ul");
let li = document.querySelector("li");
lu.removeChild(li);



//deff betweeen .classList.add() and .classList.toggle()


//add a highlight class to every even item in a list
let hey = document.querySelectorAll("ul li:nth-Child(2n)");
hey.forEach(function(elem){
    elem.classList.add("highlight");
})



//set the font size of all <p> elements to 18px using .style

let pp = document.querySelectorAll("p");
pp.forEach(function(elem){
    elem.style.fontSize = "18px"
})
