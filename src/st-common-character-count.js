import { NotImplementedError } from '../extensions/index.js';

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
export default function getCommonCharacterCount(s1, s2) {
  const [firstArr, secondArr] = [s1.split(''), s2.split('')];
  return firstArr.reduce((acc, cur) => {
    const idx = secondArr.indexOf(cur);
    if (idx !== -1) {
      acc++;
      secondArr.splice(idx, 1);
    }
    return acc;
  }, 0);
}