function prf() {//viser passord regler og gjømer annet
    document.getElementById("pr").style.visibility = "visible"
    document.getElementById("paslaging").style.visibility = "hidden"
    document.getElementById("tfa").style.visibility = "hidden"
}

function paslagingf() {//viser passord laging og gjømer annet
    document.getElementById("paslaging").style.visibility = "visible"
    document.getElementById("tfa").style.visibility = "hidden"
    document.getElementById("pr").style.visibility = "hidden"
}

function tfaf() {//viser 2fa og gjømer annet
    document.getElementById("tfa").style.visibility = "visible"
    document.getElementById("pr").style.visibility = "hidden"
    document.getElementById("paslaging").style.visibility = "hidden"
}

//under er hvordan den sjekker om det er et bra passord

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}