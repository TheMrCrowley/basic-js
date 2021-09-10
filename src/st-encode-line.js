import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let resultStr = '';
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      counter++;
      if (counter === 1) {
        resultStr += `${str[i]}`;
      } else {
        resultStr += `${counter}${str[i]}`;
      }      
      counter = 0;
    } else {
      counter++;
    }
  }
  return resultStr;
}