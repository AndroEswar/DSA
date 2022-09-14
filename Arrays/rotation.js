/*
  Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.
  example: array = [1,2,3,4,5,6,7], d = 2, n = 7
  output: [3,4,5,6,7,1,2]
*/

// TC: O(n), SC: O(n)
// function rotation(arr, d, n) {
//   if (d === n || d === 0) return arr;
//   if (d > n) d = n - d;
//   let leftArr = [];
//   let rightArr = [];
//   for (let i = 0; i < n; i++) {
//     if (i < d) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }
//   return [...rightArr, ...leftArr].join(', ');
// }


// TC: O(n * d), SC: O(1)
// function rotation(arr, d, n) {
//   if (d === n || d === 0) return arr;
//   if (d > n) d = d - n;
//   for (let i = 0; i < d; i++) {
//     arr = leftRotationByOne(arr, n);
//   }
//   return arr.join(', ');
// }

// function leftRotationByOne(arr, n) {
//   let temp = arr[0];
//   for (let i = 0; i < n - 1; i++) {
//     arr[i] = arr[i+1];
//   }
//   arr[n-1] = temp;
//   return arr;
// }

// TC: O(n), SC: O(1)
function leftRotation(arr, d, n) {
  if (d === n || d === 0) return arr;
  if (d > n) d = d - n;

  reverseArray(arr, 0, d-1);
  reverseArray(arr, d, n-1);
  reverseArray(arr, 0, n-1);

  return arr.join(', ');
}

function reverseArray(arr, start, end) {
  while(start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

const arr = [1,2,3,4,5,6,7];
const d = 2;
const n = arr.length;

console.log(leftRotation(arr, d, n));