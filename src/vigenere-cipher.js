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
 *                       'alphon se alphons'
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 65-90
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
    let mess = message.toUpperCase().split('');
    let longKey = key.toUpperCase().split('');
    let offset = 0;
    longKey = mess.reduce((res, char) => {
      if (char.match(/[A-Z]/)) {
        res.push(longKey[offset % longKey.length]); offset++;
      }
      else {
        res.push(char);
      }
      return res;
    }, []);

    let res = mess
      .reduce((res, char, index) => {
        if (char.match(/[A-Z]/)) {
          res.push(String.fromCharCode((mess[index].charCodeAt(0) + longKey[index].charCodeAt(0) - 130) % 26 + 65));
        }
        else res.push(char);
        return res;
      }, [])
      .join('');

    return (this.type == 'direct') ? res : res.split('').reverse().join('');
  }

  decrypt(message, key) {
    if ((message == undefined) || (key == undefined)) throw new Error('Incorrect arguments!');
    let mess = message.toUpperCase().split('');
    let longKey = key.toUpperCase().split('');
    let offset = 0;
    longKey = mess.reduce((res, char) => {
      if (char.match(/[A-Z]/)) {
        res.push(longKey[offset % longKey.length]); offset++;
      }
      else {
        res.push(char);
      }
      return res;
    }, []);

    let res = mess
      .reduce((res, char, index) => {
        if (char.match(/[A-Z]/)) {
          if (mess[index].charCodeAt(0) - longKey[index].charCodeAt(0) >= 0)
            res.push(String.fromCharCode((mess[index].charCodeAt(0) - longKey[index].charCodeAt(0)) % 26 + 65));
          else
            res.push(String.fromCharCode((mess[index].charCodeAt(0) - longKey[index].charCodeAt(0)) % 26 + 91));
        }
        else res.push(char);
        return res;
      }, [])
      .join('');
    return (this.type == 'direct') ? res : res.split('').reverse().join('');
  }
}
vcm = new VigenereCipheringMachine(5656);
//console.log(vcm.type);
console.log(vcm.encrypt('attack at dawn!', 'alphonse'));
console.log(vcm.decrypt('AEIHQX SX DLLU!', 'alphonse'));

module.exports = {
  VigenereCipheringMachine
};
