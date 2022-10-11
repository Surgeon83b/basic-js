const { NotImplementedError } = require('../extensions/index.js');

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
function getCommonCharacterCount(s1, s2) {
  const mas1 = s1.split(''); console.log(mas1);
  const mas2 = s2.split('');
  let i = 0;
  let res = 0;
  let ind = 0;
  while (i < mas1.length) {
    ind = mas2.findIndex((el,ind,arr)=> arr[ind]==mas1[i]);
    if (ind >= 0) {
      res++;
      mas2.splice(ind, 1);
    }
    i++;
  }
  return res;
}

//console.log(getCommonCharacterCount('aabcc', 'adcaa'));
console.log(getCommonCharacterCount('a', 'b'));


module.exports = {
  getCommonCharacterCount
};
