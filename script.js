const emailField = document.getElementById("email")
const form = document.querySelector("form");
const button = document.querySelector("button")
let statusMessage = document.getElementById("status")

button.addEventListener("click", ValidateEmail)



function ValidateEmail(e){
  e.preventDefault()
  let email = emailField.value

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)){
    statusMessage.classList.remove("hidden")
    statusMessage.classList.add("text-green-600")
    statusMessage.innerText = "Email is Valid";

  } else {
    statusMessage.classList.remove("hidden")
  }

  console.log(email);
}


