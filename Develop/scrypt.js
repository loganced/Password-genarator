// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// 1. create variables to save user input from prompts 
// passwordlength string (need it to be integer)
// special characters boolean
// numericalcharacters boolean
// lowercasecharacters boolean
//uppercasecharacters boolean
  //alert ,confirm ,prompt
  // use conditionals to value inputs (password length, user enters no input)

// 2. create arrays for each type of character
  // special characters
  // 4. use randomizer function to select characters from each array
  // 3. generatepassword function -- take user input, grab characters from array and generates password


  // 5. create an empty array that represents the final password

  //6. join the character arrays together based on your user input concat

  //7. randomize characters from the joined arrays
  
// 8. transforming the array into a string 