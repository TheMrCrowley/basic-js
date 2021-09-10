import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  return repeat(str, options.repeatTimes);
  function repeat(str, num) {
    if (!num) {
      return str + additionRepeat(options.additionRepeatTimes);
    }
    if (num === 1) {
      return str + additionRepeat(options.additionRepeatTimes);;
    }
    return str + additionRepeat(options.additionRepeatTimes) + separator(options) + repeat(str, num - 1);
  }

  function separator(path) {
    if ('separator' in path) {
      return path.separator;
    }
    return '+';
  }

  function addition(path) {
    if ('addition' in path) {
      return path.addition;
    }
    return '';
  }
  
  function additionSeparator(path) {
    if ('additionSeparator' in options) {
      return path.additionSeparator;
    }
    return '|';
  }
  
  function additionRepeat(num) {
    if (!num || num === 1) {
      return addition(options);
    }
    return addition(options) + additionSeparator(options) + additionRepeat(num - 1);
  }
}