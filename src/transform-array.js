const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!");
  let res = [...arr];
  let i = 0;
  while (i < res.length) {
    switch (res[i]) {
      case '--discard-next': {
        if ((i + 2 < res.length) && ((res[i + 2] == '--double-prev') || (res[i + 2] == '--discard-prev'))) {
          res.splice(i, 3);
          break;
        }
        if (i + 1 < res.length) {
          res.splice(i + 1, 1);
        }
        res.splice(i, 1);
        break;
      }
      case '--discard-prev': {
        res.splice(i, 1);
        if (i - 1 >= 0) {
          res.splice(i - 1, 1);
        }
        break;
      }
      case '--double-next': {
        if (i + 1 < res.length) {
          res[i] = res[i + 1];
        } else
          res.splice(i, 1);
        i += 2;
        break;
      }
      case '--double-prev': {
        if (i - 1 >= 0) {
          res[i] = res[i - 1];
        } else
          res.splice(i, 1);
        i += 2;
        break;
      }
      default: i++;
    }
  }
  return res;
}

module.exports = {
  transform
};
