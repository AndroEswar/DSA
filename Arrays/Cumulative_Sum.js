/**
 * The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.
 * 
 * Initial Array: [1, 2, 3, 4]
 * Cumulative Sum: [1, 3, 6, 10]
 * 
 * Initial Array: [1, 1, 1, 1, 1]
 * Cumulative Sum: [1, 2, 3, 4, 5]
 */


function cumulativSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = sum + arr[i];
    sum = arr[i];
  }
  return arr;
}

console.log(cumulativSum([1, -2, 3, 4, -6]));