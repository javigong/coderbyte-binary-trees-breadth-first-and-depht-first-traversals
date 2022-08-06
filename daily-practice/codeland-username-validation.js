/**
 * Codeland Username Validation

Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.

Examples
Input: "aa_"
Output: false
Input: "u__hello_world123"
Output: true

*/

function CodelandUsernameValidation(str) { 

  // username between 4 and 25 characters
  if (str.length < 4 || str.length > 25) return false;

  // start with a letter
  if (!str[0].match(/[a-z]/i)) return false;

  // only contain letters, numbers, and underscore character
  if (!str.match(/[a-z0-9_]/i)) return false;

  return true; 

}
   
// keep this function call here 
console.log(CodelandUsernameValidation(readline()));