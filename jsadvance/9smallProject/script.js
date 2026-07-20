const users = [
  {
    name: "Roff",
    pic: "https://i.pinimg.com/736x/95/63/7e/95637eef90feb3290a0e490b47cffe2a.jpg",
    bio: "Lovable and pretty dog",
  },
  {
    name: "Bruno",
    pic: "https://i.pinimg.com/1200x/94/aa/fd/94aafd3aa372a17f20cdb8ff38322418.jpg",
    bio: "Playful golden retriever who loves fetching balls",
  },
  {
    name: "Bella",
    pic: "https://i.pinimg.com/736x/54/15/38/5415388deda9f6a8157e6cc49ff0e1de.jpg",
    bio: "Gentle and cuddly pup with endless energy",
  },
  {
    name: "Max",
    pic: "https://i.pinimg.com/736x/8d/83/46/8d8346fe2f9d8c4309772e1a2dbc7be5.jpg",
    bio: "Loyal companion always ready for an adventure",
  },
  {
    name: "Luna",
    pic: "https://i.pinimg.com/736x/52/56/18/5256183f76b2a666a9668344a6503f52.jpg",
    bio: "Curious little explorer who loves long walks",
  },
  {
    name: "Charlie",
    pic: "https://i.pinimg.com/1200x/43/d2/2b/43d22bbf52a875ec65098569da71c818.jpg",
    bio: "Friendly dog who makes everyone smile",
  },
  {
    name: "Daisy",
    pic: "https://i.pinimg.com/736x/2c/41/c2/2c41c2c620d0531bca8765087437c141.jpg",
    bio: "Sweet and calm dog who enjoys sunny afternoons",
  },
  {
    name: "Rocky",
    pic: "https://i.pinimg.com/1200x/88/06/b6/8806b630cd8fd502b7929580ac2d21be.jpg",
    bio: "Brave and energetic buddy with a big heart",
  },
  {
    name: "Milo",
    pic: "https://i.pinimg.com/736x/b5/87/13/b58713ea9a98fe4a2957edf6842342c4.jpg",
    bio: "Cheerful little dog who loves treats and cuddles",
  },
];

function showUsers(arr) {
  arr.forEach(function (user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const bgImg = document.createElement("img");
    bgImg.classList.add("bg-img");
    bgImg.src =
      user.pic;

    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic}`;
    blurredLayer.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const paragraph = document.createElement("p");
    paragraph.textContent =
      user.bio;

    // Append elements
    content.appendChild(heading);
    content.appendChild(paragraph);

    card.appendChild(bgImg);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Add the card to the page
    document.querySelector(".cards").appendChild(card);
    // or document.querySelector(".container").appendChild(card);
  });
}

showUsers(users);

let inp = document.querySelector(".inp")
inp.addEventListener("input", function(){
    let newUsers = users.filter((user) => {
        return user.name.startsWith(inp.value)
    })
    document.querySelector(".cards").innerHTML = "";
    showUsers(newUsers);
})

//saare users show krana
// filter krana har baqar input karne pe
//show karna filtered users
