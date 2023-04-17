const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // const arr = email.split('')
  // const index = arr.findLastIndex(letter => letter === '@')
  // const output = arr.slice(index + 1)

  // return output.join('')
}
// console.log(getEmailDomain('prettyandsimple@example.com'))

module.exports = {
  getEmailDomain
};
