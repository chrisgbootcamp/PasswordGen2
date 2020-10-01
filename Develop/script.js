// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var pwField = document.getElementById("password");

// Write password
function writePassword() {

  //Variables for use in function
  var plength;
  var pwCharSet = "";
  var generatePassword = "";

  //Write the prompt for the password length
  var plength = prompt("What length of password do you want? Must be a number between 8 and 128");

  //give alerts for lengths that are too long or too short
  if (plength < 8) {
    alert("Please select a number between 8 and 128!");
    return;
  }

  if (plength > 128) {
    alert("Please select a number between 8 and 128!");
    return;
  }

  //Write the confirms for the four variables
  var lcase = confirm("Do you wish to use Lowercase letters in your password?");

  //Write what to do with the variable if true value is returned
  if (lcase == true) {
    pwCharSet += lowercase;
  }

  var ucase = confirm("Do you wish to use Uppercase letters in your password?");
  if (ucase == true) {
    pwCharSet += uppercase;
  }

  var nmbrs = confirm("Do you wish to use Numbers in your password?");
  if (nmbrs == true) {
    pwCharSet += numbers;
  }

  var special = confirm("Do you wish to use Symbols in your password?");
  if (special == true) {
    pwCharSet += symbols;
  }

  // console.log(pwCharSet)
  for (var i = 0; i < plength; i++) {
    generatePassword += pwCharSet.charAt(Math.floor(Math.random() * pwCharSet.length));
  }

  pwField.innerHTML = generatePassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);