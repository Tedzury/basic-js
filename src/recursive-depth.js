const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depthCounter = 0;
   
    if (Array.isArray(arr)) {
      depthCounter += 1;
      arr.forEach(item => {
        if (Array.isArray(item)) { 
          let itemDepth = 1;
          itemDepth += this.calculateDepth(item);
          if (itemDepth > depthCounter) depthCounter = itemDepth
        }} 
      )
    }

    return depthCounter
  }
}
const depthCalc = new DepthCalculator();

console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]) )
console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]) )
console.log(depthCalc.calculateDepth([[[]]]) )
console.log(depthCalc.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]])) //8
console.log(depthCalc.calculateDepth([[[[[[[[[[]]]]]]]]]])) //10
console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])) //31

module.exports = {
  DepthCalculator
};
