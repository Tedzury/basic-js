const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {


  const string = str.split('');
  const output = [];
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    counter++
    if (string[i] !== string[i+1]) {
      if (counter === 1) {
        output.push(string[i])
        counter = 0;
      } else {
        output.push(counter)
        output.push(string[i])
        counter = 0;
      }
    }
  }

  return output.join('')
}

// encodeLine('aabbbc')
// encodeLine('abbcca')
module.exports = {
  encodeLine
};
