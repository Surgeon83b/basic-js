const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  type = '';
  constructor(isDirect) {
    if ((isDirect == true) || (isDirect == undefined)) this.type = 'direct';
    else this.type = 'reverse';
  }
  encrypt(message, key) {
    if ((message == undefined) || (key == undefined))
      throw new Error('Incorrect arguments!');
  }
  decrypt(message, key) {
    if ((message == undefined) || (key == undefined))
      throw new Error('Incorrect arguments!');
  }
}
//vcm = new VigenereCipheringMachine(5656);
//console.log(vcm.type);
//vcm.encrypt();

module.exports = {
  VigenereCipheringMachine
};
