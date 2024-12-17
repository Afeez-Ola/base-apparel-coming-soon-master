"use strict";

var emailField = document.getElementById("email");
var form = document.querySelector("form");
var button = document.querySelector("button");
var statusMessage = document.getElementById("status");
button.addEventListener("click", ValidateEmail);
form.addEventListener("submit", ValidateEmail);

function ValidateEmail(e) {
  e.preventDefault();
  var email = emailField.value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    statusMessage.classList.remove("hidden", "text-brown-light");
    statusMessage.innerText = "Thank you for Joining Us! ";
    statusMessage.style.color = "green";
    console.log(statusMessage);
    emailField.value = "";
  } else {
    statusMessage.classList.remove("hidden");
  }

  console.log(email);
}