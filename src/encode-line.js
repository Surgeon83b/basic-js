const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
 let res = '';
 let i = 0;
 let cur = '';
 while (i<str.length){
  cur = str[i];
  count = 1;
  let j=i+1;
  while ((j<str.length)&&(str[j]==str[i])){
    count++;
    j++;
  }
  if (count==1) count = '';
  res = res + count + str[i];
  i = j;
 }
 return res;
}

console.log(encodeLine('aabbbc'));

module.exports = {
  encodeLine
};
