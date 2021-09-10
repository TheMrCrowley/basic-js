import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const DNS = {};
  for (let i = 0; i < domains.length; i++) {
    let subDNS = '';
    const domain = domains[i].split('.').reverse();
    for (let j = 0; j < domain.length; j++) {
      subDNS += `.${domain[j]}`;
      if (DNS[subDNS]) {
        DNS[subDNS]++;
      } else {
        DNS[subDNS] = 1;
      }
    }
  }
  return DNS;
}
