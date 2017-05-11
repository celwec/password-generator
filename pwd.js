/*
** This function generates a password at random using numbers, uppercase,
** lowercase, and special characters found on the US keyboard.
*/

function pwd (
  length    = 16,
  special   = false,
  uppercase = true,
  lowercase = true,
  numbers   = true
) {

  // API for HTML document integration
  if (len = document.getElementById("pwd-lg")) length    = len.value;
  if (spl = document.getElementById("pwd-sp")) special   = spl.checked;
  if (upc = document.getElementById("pwd-uc")) uppercase = upc.checked;
  if (lwc = document.getElementById("pwd-lc")) lowercase = lwc.checked;
  if (num = document.getElementById("pwd-no")) numbers   = num.checked;

  // Possible characters to be added to the character pool
  var sp = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~",
      uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lc = "abcdefghijklmnopqrstuvwxyz",
      no = "0123456789";

  // Character pool
  var allowed = "";

  // Adding characters to character pool
  if (special)   allowed += sp;
  if (uppercase) allowed += uc;
  if (lowercase) allowed += lc;
  if (numbers)   allowed += no;

  // Password stored in this variable
  var password = "";

  // Adding new characters randomly from the character pool to the password
  for (var i = 0; i < length; i++) {

    // Picking a character at random from the character pool
    var random    = Math.floor(Math.random() * allowed.length);
    var character = allowed.charAt(random);

    // Adding randomly picked character to password
    password += character;
  }

  // Returning finished password
  return password;
}
