define([], function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * Adds two numbers.
   *
   * @static
   * @memberOf _
   * @category Math
   * @param {number} augend The first number in an addition.
   * @param {number} addend The second number in an addition.
   * @returns {number} Returns the total.
   * @example
   *
   * _.add(6, 4);
   * // => 10
   */
  function add(augend, addend) {
    var result;
    if (augend === augend && augend != null) {
      result = augend;
    }
    if (addend === addend && addend != null) {
      result = result === undefined ? addend : (result + addend);
    }
    return result;
  }

  return add;
});
