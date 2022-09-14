// Given a String, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or pharse that is the same forwards and backwards.
// A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.

// var allPermutations = function (arr, permutation = [], answer = []) {
//   if (arr.length === 0) {
//     answer.push([...permutation])
//   }

//   for (let i = 0; i < arr.length; i++) {
//     permutation.push(arr[i]);
//     const choices = arr.filter((num, ind) => ind !== i);
//     allPermutations(choices, permutation, answer);
//     permutation.pop();
//   }
//   return answer;
// }

var allPermutationsDummy = function (arr, permutations = [], answer = []) {
  console.log('1', permutations, answer)
  if (arr.length === 0) {
    console.log('2', permutations)
    answer.push([...permutations]);
  }

  for (let i = 0; i < arr.length; i++) {
    console.log('i', i)
    permutations.push(arr[i]);
    const choices = arr.filter((num, ind) => ind !== i);
    allPermutationsDummy(choices, permutations, answer);
    console.log('3')
    permutations.pop();
  }
  return answer;
}

console.log(allPermutationsDummy([1,2]))

// abc
// a                   b                                 c 
// abc                 bac                               cab
// acb                 bca                               cba



// [abc, acb, bca, bac, cba, cab]

