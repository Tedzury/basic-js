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
  const string = str ? [String(str)] : ['null']
    string === false ? ['false'] : 
    string === null ? ['null'] :
    undefined;;

  const mainRepeat = options.repeatTimes ?  options.repeatTimes : 0;
  const additionRepeat = options.additionRepeatTimes ? options.additionRepeatTimes : 0; 

  const mainSeperator = options.separator ? options.separator : '+';
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

  const additionStr = options.addition? [String(options.addition)] : 
    options.addition === false ? ['false'] : 
    options.addition === null ? ['null'] :
    undefined;

  const formedAdditionalString = additionRepeat && additionStr ? formMeAString(additionStr, additionRepeat, additionSeparator) : 
    additionStr ? additionStr : 
    additionStr === false ? ['false'] :
    additionStr === null ? ['null'] :
    undefined;

  if (formedAdditionalString) {
    string[0] = string[0] + formedAdditionalString
  }

  if (mainRepeat) {
    return formMeAString(string, mainRepeat, mainSeperator)
  }

  return string.join('')

  function formMeAString(str, repeat, separator) {
    const arr = [...str];
    for (let i = 1; i < repeat; i++) {
      arr[i] = str;
    }
    return arr.join(`${separator}`)
  }
    
}

console.log(repeater('STRING', { repeatTimes: 3, 
                     separator: '**', 
                     addition: 'PLUS', 
                     additionRepeatTimes: 3, 
                     additionSeparator: '00' }))
//=> 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'

module.exports = {
  repeater
};
