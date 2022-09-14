/**
 * The problem: Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 * Valid operators are +, -, *, /. Each operand may be an integer or another expression.
 * Some examples:
 * ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
 * ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
 */


function reversePolishNotation(arr) {
  const operators = ['+', '-', '*', '/'];
  const stack = [];
  let res = undefined;

  for (let i = 0; i < arr.length; i++) {
    if (operators.includes(arr[i])) {
      let num2 = res;
      if (num2 === undefined) {
        num2 = stack.pop();
      }
      let num1 = stack.pop();
      // console.log(res, num1, num2, arr[i])
      switch(arr[i]) {
        case '+':
          res = Number(num1) + Number(num2);
          break;
        case '-':
          res =  Number(num1) - Number(num2);
          break;
        case '*':
          res =  Number(num1) * Number(num2);
          break;
        case '/':
          res = Math.floor( Number(num1) / Number(num2));
          break;
        default:
          res = res;
      }
    } else {
      stack.push(arr[i]);
    }
  }

  console.log({ res })
}

const arr = ["2", "1", "+", "3", "*"];
const arr2 = ["4", "13", "5", "/", "+"];

reversePolishNotation(arr);

// res = undefined;
// stack = [2, 1, 3]

// if (operator) {
//   num1 = res;
//   if (res === undefined) {
//     num1 = stack.pop();
//   }
//   num2 = stack.pop();

//   res = num1 {operator} num2
// }

// res = 3

// if (operator) {
//   num1 = res;
//   if (num1 === undefined) {
//     num1 = stack.pop();
//   }
//   num2 = stack.pop();

//   res = num1 {operator} num2
// }



