/** Used for built-in method references. */
var objectProto = global.Object.prototype;

/**
 * Used by `_.defaults` to customize its `_.assignIn` use.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @returns {*} Returns the value to assign.
 */
function assignInDefaults(objValue, srcValue, key) {
  return (objValue === undefined || objValue === objectProto[key])
    ? srcValue
    : objValue;
}

module.exports = assignInDefaults;
