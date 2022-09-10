const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
 if (!matrix.length) return 0;
 let res = matrix[0].reduce((sum, el)=> sum+el,0);
  for (let i=1; i<matrix.length;i++){
    res = res + matrix[i].reduce((sum, el, ind)=>
    {
      if (matrix[i-1][ind]) return sum+el;
      else return sum;
    }, 0);
  }
 return res;
}
matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
  ]
console.log(getMatrixElementsSum(matrix));

module.exports = {
  getMatrixElementsSum
};
