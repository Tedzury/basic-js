const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");

  const transformed = [...arr];
  
  for (let i = 0; i < transformed.length; i++) {
    if (typeof transformed[i] === 'string') { 
      transformed[i] = transformation(transformed[i], i)
    }
  }

  return transformed.filter(item => {if (item) return item})

  function transformation(item, i) {

    switch(item) {
      case '--discard-next':
        if (transformed[i + 1]) {
          transformed[i + 1] = null;
        }
        return null
      case '--discard-prev':
        if (transformed[i - 1] < 0) return null
        transformed[i - 1] = null
        return null
      case '--double-next':
        if (transformed[i + 1]) {
          return transformed[i + 1]
        }
        return null
      case '--double-prev':
        if (transformed[i - 1] < 0) return null
        return transformed[i - 1]
      default:
        return item
    }
  } 
}

// console.log(transform([1, 2, 3, '--double-prev', 4, 5]))

module.exports = {
  transform
};
