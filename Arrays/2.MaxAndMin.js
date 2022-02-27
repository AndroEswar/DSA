// Find the maximum and minimum element in an array
// SC: O(1), TC: O(n)

function maxAndMin(arr) {
  let max = 0;
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return [max, min];
}

console.log(maxAndMin([9,5,3,7,8,1,5,3,6]));