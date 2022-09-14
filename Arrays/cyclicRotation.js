/*
  Given an array, cyclically rotate the array clockwise by one.
  Input:  arr[] = {1, 2, 3, 4, 5}
  Output: arr[] = {5, 1, 2, 3, 4}
*/

// TC: O(n), SC: O(1)
function cyclicRotation(arr, n) {
  let lastElement = arr[n - 1];
  for (let i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = lastElement;
  return arr;
}

const arr = [1,2,3,4,5,6,7];
const n = arr.length;

console.log(cyclicRotation(arr, n));