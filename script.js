// Variables
var generateBtn = document.querySelector("#generate");
var useLowercase = false;
var useUppercase = false;
var useNumeric = false;
var useSpecial = false;
var charTypesValid = false;
var isValidLength = false;
var length = 0;

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numericChars = "0123456789".split("");
var specialChars = "`~!@#$%^&*_+-=';.,:?".split("");

// Write password to the #password input
function writePassword() {
  while(!isValidLength){
    length = window.prompt("length of password: (8-128)","12");
    if(parseInt(length)==length){
      length = parseInt(length);
      isValidLength = length >= 8 && length <= 128;
    }
    if(!isValidLength){
      window.alert("Invalid Input: type an integer 8-128\nEX: 16");
    }
  }

  while(!charTypesValid){
    useLowercase = window.confirm("Use Lowercase Characters?");
    useUppercase = window.confirm("Use Uppercase Characters?");
    useNumeric = window.confirm("Use Numeric Characters?");
    useSpecial = window.confirm("Use Special Characters?");

    charTypesValid = useLowercase || useUppercase || useNumeric || useSpecial;

    if(!charTypesValid){
      window.alert("At least one character type must be chosen");
    }
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//generates password by randomly picking from array of valid chars
function generatePassword(){
  var allChars = [];

  if(useLowercase) {allChars = allChars.concat(lowercaseChars);}
  if(useUppercase) {allChars = allChars.concat(uppercaseChars);}
  if(useNumeric) {allChars = allChars.concat(numericChars);}
  if(useSpecial) {allChars = allChars.concat(specialChars);}

  var maxRandom = allChars.length;
  var password = "";
  
  for(i=0; i<length; i++){
    randIndex = Math.floor(Math.random() * maxRandom);
    password += allChars[randIndex];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
