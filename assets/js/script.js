// Assignment code here
//Variable Arrays
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var bigArray = [];
  var finalPassword = [];

  // Prompts for password criteria
 
  var userChoice = prompt('How many characters would you like your password to have?')

  var passLength = parseInt(userChoice)

  if (passLength < 8 || passLength > 128) {
    alert("Character count should be more than 8 and less than 128")
    return null;
  }
  // Confirms for character types to include in the password
  var useLower = confirm('Would you like to include lowercase letters in your password?');

  var useUpper = confirm('Would you like to include uppercase letters in your password?');

  var useNum = confirm('Would you like to include numbers in your password?');

  var useSpec = confirm('Would you like to include special characters in your password?');

  if (useLower === false && useNum === false && useUpper === false && useSpec === false) {
    alert("Please select one option!")
    return null;
  }

  if (useLower === true) {
    bigArray = bigArray.concat(lowercase)
  }

  if (useUpper === true) {
    bigArray = bigArray.concat(uppercase)
  }

  if (useNum === true) {
    bigArray = bigArray.concat(num)
  }

  if (useSpec === true) {
    bigArray = bigArray.concat(specialCharacters)
  }

  //for loop 
  for (var i = 0; i < passLength; i++) {
    var randomChar = getRandomCharacter(bigArray)
    finalPassword.push(randomChar)
  }
  
  return finalPassword.join('')
}

function getRandomCharacter(array) {
  
  return array[Math.floor(Math.random() * array.length)]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
