const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  // const number = String(n).split('')
  // const results = []

  // for(let i = 0; i < number.length; i++) {

  //   const arr = [...number];
  //   arr.splice(i, 1)
  //   results.push(Number(arr.join('')))
  // }

  // results.sort((a,b) => a - b)

  // return results[results.length - 1]
}

// console.log(deleteDigit(152))
// console.log(deleteDigit(1001))
module.exports = {
  deleteDigit
};
