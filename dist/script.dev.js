"use strict";

var emailField = document.getElementById("email");
var form = document.querySelector("form");
var button = document.querySelector("button");
var statusMessage = document.getElementById("status");
button.addEventListener("click", ValidateEmail);

function ValidateEmail(e) {
  e.preventDefault();
  var email = emailField.value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    statusMessage.classList.remove("hidden");
    statusMessage.classList.add("text-green-600");
    statusMessage.innerText = "Email is Valid";
  } else {
    statusMessage.classList.remove("hidden");
  }

  console.log(email);
}