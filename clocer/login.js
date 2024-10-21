let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let emailError = email.nextElementSibling;
  let isValid = true;
  emailError.textContent = "";
  
  const emailPattern = /^[^ ]+@astanait$/;
  if (!emailPattern.test(email.value)) {
    emailError.textContent = "Email должен оканчиваться на @astanait";
    isValid = false;
  }
  if (isValid) {
    console.log("Email:", email.value);
    console.log("Password:", password.value);
  }
});
