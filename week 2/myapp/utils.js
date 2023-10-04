const isNameValid = (name) => {
  // Define a regular expression pattern that matches only English letters and digits
  var pattern = /^[a-zA-Z0-9]+$/;

  // Use the test() method to check if the inputString matches the pattern
  return pattern.test(name);
}

const isEmailValid = (email) => {
  // Define a regular expression pattern for validating email addresses
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Use the test() method to check if the email matches the pattern
  return emailPattern.test(email);
}

const isPasswordValid = (password) => {
  // Define a regular expression pattern for validating email addresses
  // Define regular expressions for each character type
  var uppercaseRegex = /[A-Z]/;
  var lowercaseRegex = /[a-z]/;
  var numberRegex = /[0-9]/;
  var symbolRegex = /[~`!@#$%^&*()_+={}\[\]:;"'<>,.?/|]/;

  // Count how many of the character types are present in the password
  var characterTypesCount = 0;

  if (uppercaseRegex.test(password)) {
    characterTypesCount++;
  }

  if (lowercaseRegex.test(password)) {
    characterTypesCount++;
  }

  if (numberRegex.test(password)) {
    characterTypesCount++;
  }

  if (symbolRegex.test(password)) {
    characterTypesCount++;
  }

  // Check if at least three of the character types are present
  return characterTypesCount >= 3;
}


exports.isNameValid = isNameValid
exports.isEmailValid = isEmailValid
exports.isPasswordValid = isPasswordValid
