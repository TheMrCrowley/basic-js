import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  tempArr: [],

  getLength() {
    return this.tempArr.length;
  },

  addLink(value) {
    this.tempArr.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.getLength()) {
      this.tempArr = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.tempArr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.tempArr.reverse();
    return this;
  },

  finishChain() {
    let chain = this.tempArr.join('~~');
    this.tempArr = [];
    return chain;
  }
};