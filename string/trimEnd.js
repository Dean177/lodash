var charsEndIndex = require('../internal/charsEndIndex'),
    stringToArray = require('../internal/stringToArray'),
    toString = require('../lang/toString'),
    trimmedEndIndex = require('../internal/trimmedEndIndex');

/**
 * Removes trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for functions like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trimEnd('  abc  ');
 * // => '  abc'
 *
 * _.trimEnd('-_-abc-_-', '_-');
 * // => '-_-abc'
 */
function trimEnd(string, chars, guard) {
  string = toString(string);
  if (!string) {
    return string;
  }
  if (guard || chars === undefined) {
    return string.slice(0, trimmedEndIndex(string) + 1);
  }
  chars = (chars + '');
  if (!chars) {
    return string;
  }
  var strSymbols = stringToArray(string);
  return strSymbols.slice(0, charsEndIndex(strSymbols, stringToArray(chars)) + 1).join('');
}

module.exports = trimEnd;
