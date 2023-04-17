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
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!');

    const msg = message.toUpperCase().split('');
    const keyword = key.toUpperCase().split('');
    const encrypted = [];

    let msgIndex = 0;
    let keyIndex = 0;

    while (msgIndex < msg.length) {

      if (msg[msgIndex] === ' ') {
        encrypted.push(' ')
        msgIndex++
        continue
      }
      if (keyIndex > keyword.length - 1) {
        keyIndex = keyIndex - (keyword.length)
      }

      const msgLetterIndex = alphabet.findIndex(item => item === msg[msgIndex]);
      const keyLetterIndex = alphabet.findIndex(item => item === keyword[keyIndex]);

      if (msgLetterIndex === -1) {
        encrypted.push(msg[msgIndex])
        msgIndex++;
        keyIndex++;
        continue
      }
      
      let encryptedLetter = (keyLetterIndex + msgLetterIndex) % 26;

      encrypted.push(alphabet[encryptedLetter])
  
      msgIndex++;
      keyIndex++;
    }

    const output = this.isDirect === true ? encrypted.join('') : encrypted.reverse().join('')

    console.log(output)
    return output
  }
  
  decrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!');

    const msg = message.toUpperCase().split('');
    const keyword = key.toUpperCase().split('');
    const decrypted = [];

    let msgIndex = 0;
    let keyIndex = 0;

    while (msgIndex < msg.length) {

      if (msg[msgIndex] === ' ') {
        decrypted.push(' ')
        msgIndex++
        continue
      }
      if (keyIndex > keyword.length - 1) {
        keyIndex = keyIndex - (keyword.length)
      }

      const msgLetterIndex = alphabet.findIndex(item => item === msg[msgIndex]);
      const keyLetterIndex = alphabet.findIndex(item => item === keyword[keyIndex]);

      if (msgLetterIndex === -1) {
        decrypted.push(msg[msgIndex])
        msgIndex++;
        keyIndex++;
        continue
      }
      
      let decryptedLetter = msgLetterIndex - keyLetterIndex <= 0 ? (msgLetterIndex - keyLetterIndex + 26) : (msgLetterIndex - keyLetterIndex);

      decrypted.push(alphabet[decryptedLetter % 26])
      msgIndex++;
      keyIndex++;
    }

    const output = this.isDirect === true ? decrypted.join('') : decrypted.reverse().join('')

    console.log(output)
    return output
  }
}

const directMachine = new VigenereCipheringMachine(true);
directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')// => 'ATTACK AT DAWN!'
directMachine.encrypt('attack at dawn!', 'alphonse') //=> 'AEIHQX SX DLLU!'

// alphabet.forEach((item, i) => console.log(`${i}: ${item}`))
//('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
    //msg - key = alphIndex     key - msg = alphIndex
    // A, A == A; 0, 0 = 0;     // A, A == A; 0, 0        || 0
    // L, E == T; 11, 4 = -7;   // L, T == E; 11, 19      || 4 
    // P, I == T; 15, 8 = -7    // P, T == I; 15, 19      || 8 
    // H, H == A; 7, 7  = 0;    // H, A == H; 7, 7        || 7 
    // O, Q == C; 14, 16 = 2;   // O, C == Q; 14, 2       || 16 
    // N, X == K; 13, 23 = 10;  // N, K == X; 13, 10      || 24 

    // S, S == A; 18, 18 = 0;   // S, A == S; 18, 0       || 18
    // E, X == T; 4, 23 = -19;  // E, T == X; 4, 19       || 23

    // A, D == D; 0, 3 = 3;     // A, D == D; 0, 3        || 3 
    // L, L == A; 11, 11 = 0;   // L, A == L; 11, 0       || 11
    // P, L == W; 15, 11 = 4;   // P, W == L; 15, 22      || 11
    // H, U == N; 7, 20 = 13;   // H, N == U; 7, 13       || 20

module.exports = {
  VigenereCipheringMachine
};
