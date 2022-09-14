/**
 * For an array of integers nums, an identical twin is defined as pair (i, j) where nums[i] is equal to nums[j] and i < j.
 * 
 * Array: [1, 2, 3, 2, 1]
 * Number of Identical Twins: 2
 * Explanation:
 * Identical Twins: [[1, 1], [2, 2]]
 * Indexes: (0, 4), (1, 3)
 * 
 * 
 * Array: [1, 2, 2, 3, 2, 1]
 * Number of Identical Twins: 4
 * Explanation:
 * Identical Twins: [[1, 1], [2, 2], [2, 2], [2, 2]]
 * Indexes: (0, 5), (1, 2), (1, 4), (2, 4)
 */

function identicalTwins(arr) {
  let hash = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (hash.hasOwnProperty(arr[i])) {
      hash[arr[i]] = ++hash[arr[i]]
    } else {
      hash[arr[i]] = 1;
    }
  }

  for (num in hash) {
    count += (hash[num] * (hash[num] - 1)) / 2;
  }
  return count;
}

console.log(identicalTwins([1, 2, 2, 3, 2, 2, 1]))