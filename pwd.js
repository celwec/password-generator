/*
** This function generates a password at random using uppercase, lowercase,
** numbers, and special characters found on the US keyboard.
*/

function pwd (
  length    = 16,
  uppercase = true,
  lowercase = true,
  numbers   = true,
  special   = false
  ) {

  // Possible characters to be added to the character pool
  var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lc = "abcdefghijklmnopqrstuvwxyz",
      no = "0123456789",
      sp = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Character pool
  var allowed = "";

  // Adding characters to character pool
  if (uppercase) allowed += uc;
  if (lowercase) allowed += lc;
  if (numbers)   allowed += no;
  if (special)   allowed += sp;

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
