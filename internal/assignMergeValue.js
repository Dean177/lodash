/**
 * This function is like `assignValue` except that it doesn't assign `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  var oldValue = object[key];
  if ((value !== undefined &&
        (value === value ? (value !== oldValue) : (oldValue === oldValue))) ||
      (typeof key == 'number' &&
        value === undefined && !(key in object))) {
    object[key] = value;
  }
}

module.exports = assignMergeValue;
