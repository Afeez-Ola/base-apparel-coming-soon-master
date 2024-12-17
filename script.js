const emailField = document.getElementById("email")
const form = document.querySelector("form");
const button = document.querySelector("button")
let statusMessage = document.getElementById("status")

form.addEventListener("submit", ValidateEmail)

function ValidateEmail(e){
  e.preventDefault()
  let email = emailField.value

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)){
    statusMessage.classList.remove("hidden", "text-brown-light")
    statusMessage.innerText = "Thank you for Joining Us! ";
    statusMessage.style.color = "green"

    console.log(statusMessage);
    
    emailField.value = ""
  } else {
    statusMessage.classList.remove("hidden")
  }
}


