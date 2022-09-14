// write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string.

// example: "Mr Jhon Smith    ";
// o/p: "Mr%20Jhon%20Smith"

function urlify(str) {
  console.log(str)
  return str.trim().replace(/ /g, '%20'); // replaceAll is not working in node env
}

console.log(urlify("Mr Jhon Smith    "))