// Write a program to reverse an array or string
function reverseArr(arr) {
  let isString = false;
  if (!Array.isArray(arr) && typeof arr === 'string') {
    isString = true;
    arr = arr.split('')
  }
  let len = arr.length;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[len - 1 - i]] = [arr[len - 1 - i], arr[i]];
  }
  return isString ? arr.join('') : arr;
}

console.log(reverseArr([1,2,3,4,5,6,7]))
console.log(reverseArr('eswar'))