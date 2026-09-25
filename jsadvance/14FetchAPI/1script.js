//JSON- Js object notation
//fetch- its an inbuilt function in js
//in fetch we give the url and fetch goes to the url and fetches the data
//fetch is promise based
//needs  to be converted into json to read

function getUsers(){
    fetch("https://randomuser.me/api/?results=3")
  .then(function (rawData) {
    return rawData.json();
  })
  .then(function (data) {
    console.log(data);
    data.results.forEach(function (user) {
      const card = document.createElement("div");
      card.className =
        "bg-zinc-800 rounded-2xl shadow-xl p-6 w-80 text-center border border-zinc-700 hover:scale-105 transition duration-300";

      // Image
      const img = document.createElement("img");
      img.src = user.picture.large;
      img.alt = "User";
      img.className =
        "w-28 h-28 rounded-full mx-auto border-4 border-indigo-500 object-cover";

      // Name
      const name = document.createElement("h2");
      name.className = "text-white text-2xl font-bold mt-4";
      name.textContent = user.name.first + " " + user.name.last; 

      // Role
      const role = document.createElement("p");
      role.className = "text-indigo-400 font-medium mt-1";
      role.textContent = user.email;

      // Description
      const desc = document.createElement("p");
      desc.className = "text-gray-400 text-sm mt-3";
      desc.textContent =
        "Passionate about building responsive and interactive web applications using HTML, CSS, JavaScript, React, and Tailwind CSS.";

      // Stats Container
      const stats = document.createElement("div");
      stats.className = "flex justify-center gap-4 mt-5";

      // Function to create each stat
      function createStat(number, label) {
        const stat = document.createElement("div");
        stat.className = "text-center";

        const h3 = document.createElement("h3");
        h3.className = "text-white text-lg font-bold";
        h3.textContent = number;

        const p = document.createElement("p");
        p.className = "text-gray-500 text-sm";
        p.textContent = label;

        stat.append(h3, p);
        return stat;
      }

      stats.append(
        createStat("120", "Followers"),
        createStat("85", "Following"),
        createStat("35", "Projects"),
      );

      // Button
      const btn = document.createElement("button");
      btn.className =
        "mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition";
      btn.textContent = "Follow";

      // Append everything
      card.append(img, name, role, desc, stats, btn);

      // Add card to page
      document.querySelector(".users").append(card);
    });
  })
  .catch(function (err) {
    console.log(err);
  });

}

getUsers();