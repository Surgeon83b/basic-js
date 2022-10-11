const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = [];
  let obj = {};
  for (let i = 0; i < names.length; i++) {
    if (typeof obj[names[i]] == 'undefined') {
      obj[names[i]] = 0;
      res.push(names[i]);
    }
    else {
      obj[names[i]]++;
      if (typeof obj[`${names[i]}(${obj[names[i]]})`] == 'undefined')
        obj[`${names[i]}(${obj[names[i]]})`] = 0;
      else obj[`${names[i]}(${obj[names[i]]})`]++;
      res.push(`${names[i]}(${obj[names[i]]})`);
    }
  }
  return res;
}

console.log(renameFiles(["file", "file", "image", "file(1)", "file", "file"]))
module.exports = {
  renameFiles
};
