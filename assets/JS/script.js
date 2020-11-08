// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Character types
var allCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#%$&*@^()\'+=,.-:<>?[]_{}^|~';

// Retrieve user input for password length

var selectCharacterLength = function () {
  var passwordLength = window.prompt("Choose length of password. Must be between 8-128 characters long.")

  //if user doesn't meet length requirements is prompted to re-enter 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must enter a number between 8-128 characters!");
    selectCharacterLength();
  }

  // Return acceptable input to function
  return passwordLength;
}

// Function for character type options  to be confirmed by user
function selectCharacterTypes() {

  // This will hold the the chosen character types
  var selectionPool = '';
  //option to include Uppercase
  var selectUpperCase = window.confirm("Would you like to include UPPERCASE characters in your password?")
  console.log(selectUpperCase)

  if (selectUpperCase == true) {
    //if true adds character uppercases to selection pool
    selectionPool += allCharacters.slice(26, 52);
    console.log("uppercase " + selectUpperCase);
  }

  // Option to include lowercase
  var selectLowerCase = window.confirm("Would you like to include LOWERCASE characters in your passwords?")
  console.log(selectLowerCase);

  if (selectLowerCase == true) {
    //if true adds lowercase characters to selection pool
    selectionPool += allCharacters.slice(0, 26)
    console.log("lowercase " + selectLowerCase);
  }

  // Option for special characters
  var selectSpecialCharacter = window.confirm("Would you like to include SPECIAL characters in your password?")
  console.log(selectSpecialCharacter)
  if (selectSpecialCharacter == true) {
    selectionPool += allCharacters.slice(62,92);
    console.log("special characters " + selectSpecialCharacter);
  }
  
  
  
  
  // Option to include numbers
  var selectNumber = window.confirm("Would you like to include NUMBERS in your password?")
  console.log(selectNumber);

  if (selectNumber == true) {
    // if true, adds numbers to selection pool
    selectionPool += allCharacters.slice(52, 62);
    console.log("number " + selectNumber);
  }

  //if user did not make a selection
  if (selectionPool === '') {
    alert("You must select atleast one or more of the options for password.")
    selectCharacterTypes();
  }

  // Return string to selectCharacterTypes()
  return selectionPool;


}

// New Function to generate the password
function generatePassword() {
  var passwordLength = selectCharacterLength();
  var chosenCharacterPool = selectCharacterTypes();
  console.log("The password will have " + passwordLength + " characters randomized from " + chosenCharacterPool);
  //variable that hold password after random selection
  var password = '';
  console.log(password.length);

  var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
  }

  while (password.length < passwordLength + 1) {
    if (chosenCharacterPool.includes(allCharacters.slice(0, 26))) {
      var index = randomNumber(26, 0);
      console.log(index + " from lower is added to the string")
      password += allCharacters[index];
    };

    if (chosenCharacterPool.includes(allCharacters.slice(26, 52))) {
      var index = randomNumber(52, 26);
      password += allCharacters[index];
    };

    if (chosenCharacterPool.includes(allCharacters.slice(52, 62))) {
      var index = randomNumber(62, 52);
      password += allCharacters[index];
    };

    if (chosenCharacterPool.includes(allCharacters.slice(62, 92))) {
      var index = randomNumber(92, 62);
      password += allCharacters[index];
    };


  };

  //randomized password variable
  var randomizedPassword = '';
  for (i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * (password.length - 1));

    //Compiled password is here
    randomizedPassword += password[index];
  };

  //Return password to function
  return randomizedPassword;

}
// THE END