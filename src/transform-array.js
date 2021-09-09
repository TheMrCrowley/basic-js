import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) {
    return [];
  }

  const newArr = [];
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === '--discard-next') {
      if (arr[idx + 1]) {
        console.log('here');
        idx++;
      }
    } else if (arr[idx] === '--discard-prev') {
      if (arr[idx - 1] && arr[idx - 2] !== '--discard-next') {
        newArr.pop();
      }
    } else if (arr[idx] === '--double-next') {
      if (arr[idx + 1]) {
        newArr.push(arr[idx + 1]);
      }
    } else if (arr[idx] === '--double-prev') {
      if (arr[idx - 1] && arr[idx - 2] !== '--discard-next') {
        newArr.push(arr[idx - 1]);
      }
    } else {
      newArr.push(arr[idx]);
    }
  }
  return newArr;
}

// function transform(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error ("'arr' parameter must be an instance of the Array!");
//   }
//   if (arr.length === 0) {
//     return [];
//   }

//   const newArr = [];
//   for (let idx = 0; idx < arr.length; idx++) {
//     if (arr[idx] === '--discard-next') {
//       if (arr[idx + 1]) {
//         console.log('here');
//         idx++;
//       }
//     } else if (arr[idx] === '--discard-prev') {
//       if (arr[idx - 1] && arr[idx - 2] !== '--discard-next') {
//         newArr.pop();
//       }
//     } else if (arr[idx] === '--double-next') {
//       if (arr[idx + 1]) {
//         newArr.push(arr[idx + 1]);
//       }
//     } else if (arr[idx] === '--double-prev') {
//       if (arr[idx - 1] && arr[idx - 2] !== '--discard-next') {
//         newArr.push(arr[idx - 1]);
//       }
//     } else {
//       newArr.push(arr[idx]);
//     }
//   }
//   return newArr;
// }