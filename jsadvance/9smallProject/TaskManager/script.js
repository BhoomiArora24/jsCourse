let addbtn = document.querySelector("#addBtn");
let form = document.querySelector("#formModal");
let closeForm = document.querySelector("#close-form");
let cardContainer = document.querySelector('#cardContainer');
let submit = document.querySelector('.submit');
let forms = document.querySelector('.form');

addbtn.addEventListener("click", function () {
  form.style.display = "initial";
  form.style.display = "flex";
  form.style.position = "fixed";
  form.style.top = "50%";
  form.style.left = "50%";
  form.style.transform = "translate(-50%, -50%)";
  form.style.zIndex = "1000";
});

closeForm.addEventListener("click", function () {
  form.style.display = "none";
});

forms.addEventListener("submit", function(e){
  e.preventDefault();
  let name = document.querySelector(".name")
})