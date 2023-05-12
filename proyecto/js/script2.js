document.getElementById("login-link").addEventListener("click", function(e) {
  e.preventDefault();
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var emailError = document.getElementById("email-error");
  var passwordEmptyError = document.getElementById("password-empty-error");
  var passwordLengthError = document.getElementById("password-length-error");
  var passwordLetterNumberError = document.getElementById("password-letter-number-error");
  var passwordCharError = document.getElementById("password-char-error");
  var passwordNumberError = document.getElementById("password-number-error");
  var emailFormatError = document.getElementById("email-format-error");
  var isValid = true;

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
    passwordLengthError.style.display = "none";
    passwordLetterNumberError.style.display = "none";
    passwordCharError.style.display = "none";
    passwordNumberError.style.display = "none";
    isValid = false;
  } else {
    passwordEmptyError.style.display = "none";
    passwordLengthError.style.display = "none";
    passwordLetterNumberError.style.display = "none";
    passwordCharError.style.display = "none";
    passwordNumberError.style.display = "none";
    
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
      isValid = false;
    } else {
      passwordLengthError.style.display = "none";
      passwordLetterNumberError.style.display = "none";
      passwordCharError.style.display = "none";
      passwordNumberError.style.display = "none";
    }
  }

  if (isValid) {
    // Aquí puedes redirigir al usuario a la página principal
    window.location.href = "index.html";
  }
});