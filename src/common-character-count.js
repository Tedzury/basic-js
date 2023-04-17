const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  
  let primeStr;
  let  secondStr;
  let counter = 0;

  if (s1.length >= s2.length ) {
    primeStr = s1.split('')
    secondStr = s2.split('')
  } else {
    primeStr = s1.split('')
    secondStr = s2.split('')
  }

  for (let i = 0; i < primeStr.length; i++) {

    const index = secondStr.findIndex(letter => letter === primeStr[i])
    if (index > -1) {
      counter++;
      secondStr.splice(index, 1)
    }
  }

  return counter
}

getCommonCharacterCount( "aabcc", "adcaa" )

module.exports = {
  getCommonCharacterCount
};
