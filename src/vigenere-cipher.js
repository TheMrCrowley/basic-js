import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(type) {
    this.machineType = (type === false);
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error ('Incorrect arguments!');
    const [correctMessage, correctKey, stashTokens] = this.convertInput(message, key);
    const numRes = this.numToEncrypt(correctMessage, correctKey);

    const subRes = numRes.map(token => {
      if (this.alphabet[token]) {
        return this.alphabet[token];
      }
      return token;
    });
  
    stashTokens.forEach(item => {
      subRes.splice(item[1], 0, item[0]);
    });

    if (this.machineType) {
      return subRes.reverse().join('');
    }
  
    return subRes.join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error ('Incorrect arguments!');
    const [correctMessage, correctKey, stashTokens] = this.convertInput(message, key);
    const numRes = this.numToDecrypt(correctMessage, correctKey);

    const subRes = numRes.map(token => {
      if (this.alphabet[token]) {
        return this.alphabet[token];
      }
      return token;
    });
  
    stashTokens.forEach(item => {
      subRes.splice(item[1], 0, item[0]);
    });

    if (this.machineType) {
      return subRes.reverse().join('');
    }
  
    return subRes.join('');
  }

  convertInput(message, key) {
    const stash = [];
    Array.from(message.toUpperCase()).forEach((token, idx) => {
      if (!this.alphabet.includes(token)) {
        stash.push([token, idx]);
      }
    });
    const convertedMessage = Array.from(message.toUpperCase()).filter(token => this.alphabet.includes(token)).join('');
    let convertedKey = '';
    if (convertedMessage.length > key.length) {
      const inc = Math.floor(convertedMessage.length / key.length);
      const rest = convertedMessage.length % key.length;
      for (let i = 0; i < inc; i++) {
        convertedKey += key;
      }
      for (let i = 0; i < rest; i++) {
        convertedKey += key[i];
      }
    } else if (message.length < key.length) {
      convertedKey = key.substring(0, message.length);
    } else {
      convertedKey = key;
    }
    convertedKey = convertedKey.toUpperCase();
    return [convertedMessage, convertedKey, stash];
  }

  numToEncrypt(message, key) {
    const numMessage = Array.from(message).map(token => this.alphabet.indexOf(token));

    const numKey = Array.from(key).map(token => this.alphabet.indexOf(token));

    return numMessage.map((token, idx) => {
      if (token + numKey[idx] > 25) {
        return (token + numKey[idx]) - 26;
      }
      return token + numKey[idx];
    });
  }

  numToDecrypt(message, key) {
    const numMessage = Array.from(message).map(token => this.alphabet.indexOf(token));

    const numKey = Array.from(key).map(token => this.alphabet.indexOf(token));

    return numMessage.map((messagmeNum, idx) => {
      if (messagmeNum - numKey[idx] < 0) {
        return (messagmeNum + 26) - numKey[idx];
      }
      return messagmeNum - numKey[idx];
    });
  }
}