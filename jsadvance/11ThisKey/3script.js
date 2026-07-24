let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
let userContainer = document.querySelector("#userContainer");

const userManager = {
  users: [],

  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },

  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },

  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    form.reset();
    this.renderUI();
  },

  renderUI: function () {
    // Clear old cards
    userContainer.innerHTML = "";

    this.users.forEach((user, index) => {
      const card = document.createElement("div");

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

      // Append
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(desc);

      // Click event
      card.addEventListener("click", () => {
        this.removeUser(index);
      });

      userContainer.appendChild(card);
    });
  },

  removeUser: function (index) {
    this.users.splice(index, 1);
    this.renderUI();
  },
};

userManager.init();