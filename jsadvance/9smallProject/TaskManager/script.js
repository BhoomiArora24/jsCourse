let addbtn = document.querySelector("#addBtn");

let formContainer = document.querySelector(".form");   // outer popup

let form = document.querySelector("form");             // actual form

let closeForm = document.querySelector("#close-form");

let cancel = document.querySelector(".cancel");

let submit = document.querySelector(".submit");

let cardContainer = document.querySelector("#cardContainer");

let fullCard = document.querySelector(".fullCard");

const nameInput = document.querySelector(".name");
const professionInput = document.querySelector(".profession");
const townInput = document.querySelector(".town");
const bookingInput = document.querySelector(".booking");
const dateInput = document.querySelector(".date");
const priorityInput = form.querySelectorAll(".priority");
const imageInput = document.querySelector(".image");


//code starts here
addbtn.addEventListener("click", function () {
  formContainer.style.display = "flex";
  formContainer.style.position = "fixed";
  formContainer.style.top = "50%";
  formContainer.style.left = "50%";
  formContainer.style.transform = "translate(-50%, -50%)";
  formContainer.style.zIndex = "1000";

  fullCard.style.display = "none";
});

cancel.addEventListener("click", function () {
  formContainer.style.display = "none";
  fullCard.style.display = "flex";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Remove previous error messages
  document.querySelectorAll(".error").forEach(function (error) {
    error.remove();
  });

  let isValid = true;

  // Function to show error
  function showError(input, message) {
    const error = document.createElement("small");
    error.classList.add("error");
    error.textContent = message;

    error.style.color = "red";
    error.style.display = "block";
    error.style.marginTop = "5px";

    input.parentElement.appendChild(error);

    isValid = false;
  }

  // Name validation
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
  }

  // Profession validation
  if (professionInput.value.trim() === "") {
    showError(professionInput, "Profession is required");
  }

  // Town validation
  if (townInput.value.trim() === "") {
    showError(townInput, "Town is required");
  }

  // Booking validation
  if (bookingInput.value.trim() === "") {
    showError(bookingInput, "Booking information is required");
  }

  // Date validation
  if (dateInput.value === "") {
    showError(dateInput, "Please select a date");
  }

  // Priority validation
  if (priorityInput.value === "") {
    showError(priorityInput, "Please select a priority");
  }

  // Image validation
  if (imageInput.files.length === 0) {
    showError(imageInput, "Please select an image");
  }

  // If any field is invalid, stop here
  if (!isValid) {
    return;
  }

  // ---------------------------
  // FORM IS VALID
  // ---------------------------

  console.log("Form submitted successfully!");

  // Close form
  formContainer.style.display = "none";

  // Show cards
  fullCard.style.display = "flex";
});