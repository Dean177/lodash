define(['../internal/baseTrim', '../internal/charsEndIndex', '../internal/charsStartIndex', '../internal/stringToArray', '../lang/toString'], function(baseTrim, charsEndIndex, charsStartIndex, stringToArray, toString) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * Removes leading and trailing whitespace or specified characters from `string`.
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
   * _.trim('  abc  ');
   * // => 'abc'
   *
   * _.trim('-_-abc-_-', '_-');
   * // => 'abc'
   *
   * _.map(['  foo  ', '  bar  '], _.trim);
   * // => ['foo', 'bar']
   */
  function trim(string, chars, guard) {
    string = toString(string);
    if (!string) {
      return string;
    }
    if (guard || chars === undefined) {
      return baseTrim(string);
    }
    chars = (chars + '');
    if (!chars) {
      return string;
    }
    var strSymbols = stringToArray(string),
        chrSymbols = stringToArray(chars);

    return strSymbols.slice(charsStartIndex(strSymbols, chrSymbols), charsEndIndex(strSymbols, chrSymbols) + 1).join('');
  }

  return trim;
});
