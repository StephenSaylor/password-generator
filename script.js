// Assignment Code
var generateBtn = document.querySelector("#generate");
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");

alert("Welcome to Stephen's Password Generator.  Please click 'ok' then 'generate password' to begin!");

function generatePassword(){
  var allCharacters = [];
  var resultPassword = "";
  var pwLength = prompt("How many characters would you like? (Between 8-128)");
  
  if(pwLength <8 || pwLength>128){
    alert("Please keep the character length between 8-128");
  } 
  
  else {
      if(confirm("Would you like uppercase letters?")){
        Array.prototype.push.apply(allCharacters, abcUpperArr);  
      }
      if(confirm("Would you like lowercase letters?")){
        Array.prototype.push.apply(allCharacters, abcLowerArr);
      }
      if(confirm("Would you like numbers?")){
        Array.prototype.push.apply(allCharacters, numArr);
      }
      if(confirm("Would you like symbols?")){
        Array.prototype.push.apply(allCharacters, symArr);
      }
      if(allCharacters.length===0){
        alert("You must select at least one (1) type of character for your password");
      }
      else{
        for(var i=0; i<pwLength; i++){
          var random = Math.floor(Math.random()*allCharacters.length);
          resultPassword += allCharacters[random];
      }
    }
  }
  return resultPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}