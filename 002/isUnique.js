// Implement an algorithm to dettermine if a string has all unique characters. What if you cannot use additional data structures?

// Time Complexity: O(n) && Space Complexity: O(n)
function isUnique(str) {
  if (str.length > 128) {
    return false;
  }
  console.log(str.length)
  let tempMemory = {};
  for (let i = 0; i < str.length; i++) {
    if (tempMemory[str[i]]) {
      return false;
    }
    tempMemory[str[i]] = true;
  }
  return true;
}

console.log(isUnique('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_-+={}[];:/?.>,<"'))