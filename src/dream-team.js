const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if ((members)&&(!members.length)) return false;
  if (!Array.isArray(members)) return false;
  let res = members
  .map(el => (typeof (el) == 'string') ? (el.trimStart()[0]).toUpperCase() : '')
  .reduce((sum,el)=>sum+el).split('').sort().join('');
  if (res) return res; else return false;
}

console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']))
module.exports = {
  createDreamTeam
};
