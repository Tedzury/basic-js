const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {

  if (!Array.isArray(arr)) return false

 return arr.filter(name => typeof name === 'string')
           .map(name => name.trim())
           .map(name => name.slice(0, 1)
           .toUpperCase())
           .sort((a, b) => a.localeCompare(b)).join('')

}

createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])
createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])

module.exports = {
  createDreamTeam
};
