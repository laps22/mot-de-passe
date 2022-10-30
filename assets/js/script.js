// Assignment code here

document.querySelector('#generate').addEventListener('click',generateBtn)

//Variable Arrays//

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// console.log(uppercase); 

var lowercase = [ 'a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var num = [ 1,2,3,4,5,6,7,8,9];

var specialCharacters = ['!', '@', '#','$','%','^','&','*','(',')']


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //adding prompts//
  
  
  // var prompt = ('Would you like to include lowercase letters?');
  
  // var prompt = ('would you like to include uppercase letters?');
  
  // var prompt = ('Would you like to include numbers?');
  
  // var prompt = ('Would you like to include special characters?');
  
  //   GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  var userChoice = prompt('How many characters would you like your password to have?');
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  if (userChoice < 8 || userChoice > 128){
    alert("Character count should be more than 8 and less than 128")
    return null;
  }

// WHEN asked for character types to include in the password
var useLower = confirm('Would you like to user lowercase letters in your password?');
var useUpper = confirm('Would you like to include uppercase letters in your password?');
var useNum = confirm('Would you like to include numbers in your password?');
var useSpec = confirm('Would you like special characters in your password?');

// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
if (useLower === true) {
  console.log(useLower);
} else (useLower === false)
  console.log(useLower)

if (useUpper === true) {
  console.log(useUpper);
} else (useUpper === false)
  console.log(useUpper)

if (useNum === true) {
  console.log(useNum);
} else (useNum === false)
  console.log(useNum)  

if (useSpec=== true) {
  console.log(useSpec);
} else (useSpec === false)
  console.log(useSpec)  

  return (useLower + useUpper + useNum + useSpec)
}


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
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
