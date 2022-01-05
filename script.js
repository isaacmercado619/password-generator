//Selecting elements to use
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//Data input for password function
let numbers = "0123456789";
let lowerCase = "abcdefghijklomnpqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLOMNPQRSTUVWXYZ";
let specialChar = "!@#$%^&*";
let selection =  [];
let userPassword = [];

//Function for generating password
function writePassword() {

  let passwordLength = prompt('Please enter the length of characters you would like to generate, but the length of characters must be between 8 to 128.')
  if(!passwordLength){
    return;
  }

  if(
    (passwordLength <= 7 || passwordLength >= 129) ||
    (!parseInt(passwordLength)) ){
    alert('Please enter within the range.');
    return writePassword();
  }

  let numbersSelected = confirm('Do you want numbers?');
  if(numbersSelected){
    selection.push(...numbers);
  }

  let specialCharSelected = confirm('Do you want special characters?')
  if(specialCharSelected){
    selection.push(...specialChar);
  }

  let lowerCaseSelected = confirm('Do you want lower case letters?')
  if(lowerCaseSelected){
    selection.push(...lowerCase);
  }

  let upperCaseSelected = confirm('Do you want upper case letters?')
  if(upperCaseSelected){
    selection.push(...upperCase);
  }

  if(!numbersSelected, !specialCharSelected, !lowerCaseSelected, !upperCaseSelected){
    alert('Please select at least one of the choices!')
    return writePassword();
  }

  console.log(selection);

//Formula for generating random characters.
  for (var i = 0; i < passwordLength; i++) {
    userPassword.push(selection[Math.floor(Math.random() * selection.length)]);
    console.log(userPassword.join('+'));
  };
//Display value of password on the element selected.
    passwordText.value = userPassword.join('');
  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
