const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!(arguments.length)) this.chain.push('()')
    else if (value == null) this.chain.push('( null )');
    else
      this.chain.push('( ' + value.toString() + ' )');
    return this;
  },
  removeLink(position) {
    if ((isNaN(position)) || (!Number.isInteger(position)) || (position <= 0) || (position > this.chain.length)) {
      this.chain = [];
      throw Error("You can\'t remove incorrect link!");
    }
    else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};

//chainMaker.addLink(1).addLink(2).addLink(3).removeLink(5);
console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
//console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());
module.exports = {
  chainMaker
};
