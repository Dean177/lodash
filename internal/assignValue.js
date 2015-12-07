define([], function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var oldValue = object[key];
    if ((value === value ? (value !== oldValue) : (oldValue === oldValue)) ||
        (value === undefined && !(key in object))) {
      object[key] = value;
    }
  }

  return assignValue;
});
