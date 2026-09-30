//the issue coz of which react was created ki pura dom update hota tha even for a single change

let ul = document.querySelector("ul");


//slow tarika as everytime li adds dom refreshes again nagain which slows the website creates lagging
//if the changes are less then its ok but too much changes creates issues
// for(let i = 0; i<100; i++){
//     const li = document.createElement("li");
//     li.textContent = i;
//     ul.appendChild(li);
// }

const space = document.createDocumentFragment();//memory me ek space dedga to ab ap apne sare elements space m add krte rho

// for(let i = 0; i<100; i++){
//     const li = document.createElement("li");
//     li.textContent = i;
//     space.appendChild(li);
// }
// ul.appendChild(space);