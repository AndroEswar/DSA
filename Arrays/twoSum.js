function twoSum(arr, key) {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = key - arr[i];

    if (hash.hasOwnProperty(diff)) {
      return [i, hash[diff]];
    }
    hash[arr[i]] = i;
  }
  return null
}

console.log(twoSum([1,2,3,4,5], 7))