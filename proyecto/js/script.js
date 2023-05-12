document.getElementById("login-link").addEventListener("click", function(e) {
  e.preventDefault();
  var nameInput = document.getElementById("name");
  var usernameInput = document.getElementById("username");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirm-password");
  var phoneInput = document.getElementById("phone");
  var nameError = document.getElementById("name-error");
  var usernameError = document.getElementById("username-error");
  var emailError = document.getElementById("email-error");
  var passwordEmptyError = document.getElementById("password-empty-error");
  var passwordLengthError = document.getElementById("password-length-error");
  var passwordLetterNumberError = document.getElementById("password-letter-number-error");
  var passwordCharError = document.getElementById("password-char-error");
  var passwordNumberError = document.getElementById("password-number-error");
  var confirmPasswordEmptyError = document.getElementById("confirm-password-empty-error");
  var confirmPasswordError = document.getElementById("confirm-password-error");
  var emailFormatError = document.getElementById("email-format-error");
  var phoneEmptyError = document.getElementById("phone-empty-error");
  var phoneFormatError = document.getElementById("phone-format-error");
  var isValid = true;

  if (nameInput.value === "") {
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }
  
  if (usernameInput.value === "" || usernameInput.value.length < 6) {
    usernameError.style.display = "block";
    isValid = false;
  } else {
    usernameError.style.display = "none";
  }

  if (emailInput.value === "") {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
    
    // Expresión regular para validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailInput.value)) {
      emailFormatError.style.display = "block";
      isValid = false;
    } else {
      emailFormatError.style.display = "none";
    }
  }
  
  if (passwordInput.value === "") {
    passwordEmptyError.style.display = "block";
    isValid = false;
  } else {
    passwordEmptyError.style.display = "none";
    
    if (passwordInput.value.length < 12) {
      passwordLengthError.style.display = "block";
      passwordLetterNumberError.style.display = "none";
      passwordCharError.style.display = "none";
      passwordNumberError.style.display = "none";
      isValid = false;
    } else if (!/[a-zA-Z]/.test(passwordInput.value)) {
      passwordLetterNumberError.style.display = "block";
      passwordLengthError.style.display = "none";
      passwordCharError.style.display = "none";
      passwordNumberError.style.display = "none";
      isValid = false;
    } else if (!/[$#@]/.test(passwordInput.value)) {
      passwordCharError.style.display = "block";
      passwordLengthError.style.display = "none";
      passwordLetterNumberError.style.display = "none";
      passwordNumberError.style.display = "none";
      isValid = false;
    } else if(!/\d/.test(passwordInput.value)) {
      passwordNumberError.style.display = "block";
      passwordCharError.style.display = "none";
      passwordLengthError.style.display = "none";
      passwordLetterNumberError.style.display = "none";
    } else {
      passwordLengthError.style.display = "none";
      passwordLetterNumberError.style.display = "none";
      passwordCharError.style.display = "none";
      passwordNumberError.style.display = "none";
    }
  }
  
  if (confirmPasswordInput.value === "") {
    confirmPasswordEmptyError.style.display = "block";
    confirmPasswordError.style.display = "none";
    isValid = false;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordEmptyError.style.display = "none";
    confirmPasswordError.innerHTML = "Las contraseñas no coinciden";
    confirmPasswordError.style.display = "block";
    isValid = false;
  } else {
    confirmPasswordError.style.display = "none";
    confirmPasswordEmptyError.style.display = "none";
  }

  if (phoneInput.value === "") {
    phoneFormatError.style.display = "none";
    phoneEmptyError.style.display = "block";
    isValid = false;
  } else {
    // Expresión regular para validar el número de teléfono
    var phoneRegex = /^\d{10}$/;
    
    if (!phoneRegex.test(phoneInput.value)) {
      phoneEmptyError.style.display = "none";
      phoneFormatError.style.display = "block";
      isValid = false;
    } else {
      phoneFormatError.style.display = "none";
      phoneEmptyError.style.display = "none";
    }
  }

  if(isValid){
    window.location.href = "index.html";
  }
});