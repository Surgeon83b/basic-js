const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strA = str;
  let add = '';
  let toAdd = '';
  if (options.addition === null) {
    add = 'null';
    toAdd = 'null';
  } else {
    if (typeof options.addition != 'undefined') {
      add = options.addition;
      toAdd = add;
    }
  }
  let separator = (typeof options.separator == 'undefined') ? '+' : options.separator;
  let additionSeparator = (typeof options.additionSeparator == 'undefined') ? '|' : options.additionSeparator;

  if (typeof options.additionRepeatTimes == 'undefined')
    options.additionRepeatTimes = 1;

  for (let i = 1; i < options.additionRepeatTimes; i++) {
    toAdd += additionSeparator + add;
  }

  if (str === null) strA = 'null';
  let mainString = strA + toAdd;
  let res = mainString;

  if (typeof options.repeatTimes != 'undefined') {
    for (let i = 1; i < options.repeatTimes; i++) {
      res += separator + mainString;
    }
  }
  
  return res;
}

const objWithSpecificCoercion = {
  [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};
/*console.log(objWithSpecificCoercion);
console.log(Symbol.toPrimitive);*/
console.log(repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion }));

module.exports = {
  repeater
};
