// Assignment code here

document.querySelector('#generate').addEventListener('click', generateBtn)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  //adding prompts for password criteria
  // length of the password
  var userChoice = prompt('How many characters would you like your password to have?')

  var passLength = parseInt(userChoice)

  console.log(userChoice);

  if (userChoice < 8 || userChoice > 128) {
    alert("Character count should be more than 8 and less than 128")

    return null;
  }
  // Confirms for character types to include in the password
  var useLower = confirm('Would you like to include lowercase letters in your password?');
  console.log(useLower);
  var useUpper = confirm('Would you like to include uppercase letters in your password?');
  console.log(useUpper);
  var useNum = confirm('Would you like to include numbers in your password?');
  console.log(useNum);
  var useSpec = confirm('Would you like to include special characters in your password?');
  console.log(useSpec);

  if (useLower === true) {
  } else (useLower === false);

  if (useUpper === true) {

  } else (useUpper === false);

  if (useNum === true) {
  } else (useNum === false);

  if (useSpec === true) {
  } else (useSpec === false);


  //Variable Arrays//
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

  var genpassword = [uppercase + lowercase + num + specialCharacters]

  for (var i = 0; i < passLength.length; i++) {

  }
  // console.log(password);
}

// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
