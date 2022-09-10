const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

 console.log(countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]));
function countCats(/* matrix */) {
 let matrix = arguments[0];
 return matrix.map(el=>el.reduce((sum,cur)=>(cur=='^^') ? sum+1 : sum, 0)).reduce((sum,el)=>sum+el,0);
}

module.exports = {
  countCats
};
