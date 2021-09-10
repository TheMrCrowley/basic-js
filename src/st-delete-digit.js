import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const arr = Array.from((n + ''));
  const variables = arr.map((token, idx) => {
    const subArr = Array.from((n + ''));
    subArr.splice(idx, 1);
    return subArr.join('');
  });
  return Math.max(...variables);
}