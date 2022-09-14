// Given two strings, write a method to decide if one is a permutation of the other.

function sort(str) {
  str.split('').sort();
}

function checkPermutation(str1, str2) {
	if (str1.length !== str2.length) return false;
	if (sort(str1) === sort(str2)) return true;
	return false
}

console.log(checkPermutation('ant', 'nat'));
console.log(checkPermutation('apple', 'banana'));
console.log(checkPermutation('teacher', 'chertea'));