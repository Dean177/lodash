var baseFlatten = require('../internal/baseFlatten'),
    basePick = require('../internal/basePick'),
    rest = require('../function/rest');

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property names to pick, specified
 *  individually or in arrays.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.pick(object, 'user');
 * // => { 'user': 'fred' }
 */
var pick = rest(function(object, props) {
  return object == null ? {} : basePick(object, baseFlatten(props));
});

module.exports = pick;
