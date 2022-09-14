// Recursive implementation of Binary Search

function binarySearch(arr, l, r, k) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === k) {
      return true;
    }

    if (arr[mid] > k) {
      return binarySearch(arr, l, mid - 1, k);
    }

    return binarySearch(arr, mid + 1, r, k);
  }
  return false;
}

const arr = [1,2,3,4,5,6,7,8,9]
console.log(binarySearch(arr, 0, arr.length - 1, 4));

// Iterative implementation of Binary Search

function binarySearchIterative(arr1, k) {
  let l = 0;
  let r = arr1.length - 1;
  let mid;
  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);
    if (arr1[mid] === k) {
      return true;
    }

    if (arr1[mid] > k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return false;
}

const arr1 = [1,2,3,4,5,6,7,8,9]
console.log(binarySearchIterative(arr1, 4));