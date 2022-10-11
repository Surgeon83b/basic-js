const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let mas = n.split('-');
  if (mas.length != 6) return false;
  for (let i = 0; i < 6; i++) {
    if ((mas[i].length != 2) || (mas[i][0] < '0') || ((mas[i][0] > '9') && (mas[i][0] < 'A')) || (mas[i][0] > 'F')) return false;
    if ((mas[i].length != 2) || (mas[i][1] < '0') || ((mas[i][1] > '9') && (mas[i][1] < 'A')) || (mas[i][1] > 'F')) return false;
  }
  return true;
}
module.exports = {
  isMAC48Address
};
