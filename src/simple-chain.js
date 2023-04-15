const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value || value === null || value === 0 || value === false || Number.isNaN(value)) {
      this.chain.push(`( ${value} )`)
    } else {
      this.chain.push(`(  )`)
    }
    return this
  },
  removeLink(position) {
    
    if (Number.isInteger(position) && position - 1 >= 0 && position - 1 < this.chain.length) {
      this.chain.splice(position - 1, 1)
    } else {
      this.chain = [];
      throw Error('You can\'t remove incorrect link!')
    }
    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {

    const output = this.chain.join('~~')
    this.chain = []
    return output
  }
};

chainMaker.addLink('1').addLink('1').addLink('1')
console.log(chainMaker.finishChain())

module.exports = {
  chainMaker
};
