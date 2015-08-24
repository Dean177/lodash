var createModArgs = require('../internal/createModArgs');

/**
 * Creates a function that invokes `func` with arguments modified by
 * corresponding `transforms`.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to wrap.
 * @param {...(Function|Function[])} [transforms] The functions to transform
 * arguments, specified individually or in arrays.
 * @returns {Function} Returns the new function.
 * @example
 *
 * function doubled(n) {
 *   return n * 2;
 * }
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var modded = _.modArgs(function(x, y) {
 *   return [x, y];
 * }, square, doubled);
 *
 * modded(9, 3);
 * // => [81, 6]
 *
 * modded(10, 5);
 * // => [100, 10]
 */
var modArgs = createModArgs(function(value) {
  return [value];
});

module.exports = modArgs;
