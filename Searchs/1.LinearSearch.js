function linearSearch(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return true;
      break
    }
  }
  return false;
}

const arr = [1,8,4,9,3,0];
console.log(linearSearch(arr, 3))