let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
let userContainer = document.querySelector('#userContainer');

const userManager = {
  users: [], //that will store all the users
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this)); //this will make obj as this instead of form because when we create function this  was reffering to form instead of obj
  },
  //three methodws created
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function (e) {
    this.users.push({
      //agar dono side pe same chiz likhi ho name: name so instead u can write=== name, bio, role
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    form.reset();
    this.renderUI();
  },
  renderUI: function () {
    const card = document.createElement("div");
    this.users.forEach(function (user) {
      userContainer.innerHTML = "";
      card.className =
        "bg-[#232323] rounded-xl border border-gray-700 p-6 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300";

      // Image
      const img = document.createElement("img");
      img.src = user.photo;
      img.className =
        "w-24 h-24 rounded-full object-cover border-4 border-gray-500 mx-auto";

      // Name
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mt-5";
      name.textContent = user.username;

      // Role
      const role = document.createElement("p");
      role.className = "text-blue-400 font-medium mt-1";
      role.textContent = user.role;

      // Description
      const desc = document.createElement("p");
      desc.className = "text-gray-400 text-sm mt-4 leading-6";
      desc.textContent = user.bio;

      // Append elements
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(desc);
      // Add to the page
      userContainer.appendChild(card);
      // or
      // document.getElementById("container").appendChild(card);
    });
  },
  removeUser: function () {},
};

userManager.init();
//removeUser by yourself