import { NotImplementedError } from '../extensions/index.js';

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
// export default class DepthCalculator {
//   calculateDepth(arr) {
//     let arrCounter = 1;
//     let arrDeep = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         arrCounter = this.calculateDepth(arr[i]);
//         arrDeep = Math.max(arrDeep, arrCounter);
//       }
//     }
//     arrDeep++;
//     return arrDeep;
//   }
// }
export default class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        return counter + this.calculateDepth(arr.flat());
      }
    }
    return counter;
  }
}