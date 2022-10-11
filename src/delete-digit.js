const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  let str = n.toString().split('');
  let cur = [...str];
  cur.splice(0,1);
  let res = Number(cur.join(''));
  let i=1;
  while (i<str.length){
    cur = [...str];
    cur.splice(i,1);
    if (Number(cur.join(''))>res)
    res = Number(cur.join(''));
    i++
  }
  return res;
}

console.log(deleteDigit(6712345));
module.exports = {
  deleteDigit
};
