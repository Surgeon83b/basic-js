const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  let height = matrix.length;
  function minesAround(i, j) {
    let res = 0;
    if (i - 1 >= 0) {
      if (matrix[i - 1][j - 1]) res++;
      if (matrix[i - 1][j]) res++;
      if (matrix[i - 1][j + 1]) res++;
    }
    if (matrix[i][j - 1]) res++;
    if (matrix[i][j + 1]) res++;
    if (i + 1 < height) {
      if (matrix[i + 1][j - 1]) res++;
      if (matrix[i + 1][j]) res++;
      if (matrix[i + 1][j + 1]) res++;
    }
    return res;
  }

  let mas = matrix.map((el, ind1) => el.map((el, ind2) => minesAround(ind1, ind2)));
  return mas;
}
matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
]
console.log(minesweeper(matrix));
module.exports = {
  minesweeper
};
