const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats(domains) {
  let mas = [...domains].map(el => el.split('.')).map(el => el.reverse());
  let res = {};
  let sum = '';
  for (let i = 0; i < mas.length; i++) {
    sum = '';
    for (let j = 0; j < mas[i].length; j++) {
      sum = sum + '.' + mas[i][j];
      res[sum] = ((typeof res[sum]) == 'undefined') ? 1 : res[sum]+1;
    }
  }

  return res;
}

console.log(getDNSStats([
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
]))

module.exports = {
  getDNSStats
};
