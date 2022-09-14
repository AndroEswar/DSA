/**
 * 
 * Problem: Rotate an array of n elements to the right by k steps.
 * For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 * How many different ways do you know to solve this problem?
 */

const arr = [1,2,3,4,5,6,7];

function rotateArray(arr, k) {
  let len = arr.length;
  if (k > len) {
    k = len % k;
  }
  let result = [];
  for (let i = 0; i < k; i++) {
    result[i] = arr[len - k + i];
  }
  let j = 0;
  for (let i = k; i < len; i++) {
    result[i] = arr[j];
    j++;
  }
  console.log(result);
}
// space: O(n) & time: O(n)
rotateArray(arr, 3)
/** ---------------------------------------------------------------------- */


function reverse(arr, start, end) {
  while(start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function reversalRotate(arr, k) {
  let len = arr.length;
  if (k > len) {
    k = len % k;
  }

  reverse(arr, 0, k - 1);
  reverse(arr, k, len - 1);
  reverse(arr, 0, len - 1);
  console.log(arr);
}

// space: O(1) & time: O(n)
reversalRotate(arr, 3);





