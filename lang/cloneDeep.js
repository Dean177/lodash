var baseClone = require('../internal/baseClone');

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @example
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * var deep = _.cloneDeep(users);
 * console.log(deep[0] === users[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true);
}

module.exports = cloneDeep;
