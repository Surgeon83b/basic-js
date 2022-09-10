const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  let arrIndexesOfOnes = arr.reduce((sum, el, ind) => { if (arr[ind] == -1) sum.push(ind); return sum }, []);
  let arrWithoutOnes = arr.reduce((sum, el) => { if (el != -1) sum.push(el); return sum }, []).sort((a, b) => a - b);

  for (let i = 0; i < arrIndexesOfOnes.length; i++) {
    arrWithoutOnes.splice(arrIndexesOfOnes[i], 0, -1);
  }
  return arrWithoutOnes;
}

let arr = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(arr));
module.exports = {
  sortByHeight
};
