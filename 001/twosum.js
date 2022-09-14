function twoSum(arr, num) {
  const tempMemory = {};
  for (let i = 0; i < arr.length; i++) {
    if (tempMemory[arr[i]]) {
      return true;
    } else {
      tempMemory[num - arr[i]] = true;
    }
  }
  return false;
}

console.log(twoSum([10,15,3,7], 17));

// Time Complexity: O(n) && Space Complexity: O(n);