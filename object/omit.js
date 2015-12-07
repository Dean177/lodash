define(['../internal/arrayMap', '../internal/baseDifference', '../internal/baseFlatten', '../internal/basePick', './keysIn', '../function/rest'], function(arrayMap, baseDifference, baseFlatten, basePick, keysIn, rest) {

  /**
   * The opposite of `_.pick`; this method creates an object composed of the
   * own and inherited enumerable properties of `object` that are not omitted.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [props] The property names to omit, specified
   *  individually or in arrays..
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'user': 'fred', 'age': 40 };
   *
   * _.omit(object, 'user');
   * // => { 'age': 40 }
   */
  var omit = rest(function(object, props) {
    if (object == null) {
      return {};
    }
    props = arrayMap(baseFlatten(props), String);
    return basePick(object, baseDifference(keysIn(object), props));
  });

  return omit;
});
