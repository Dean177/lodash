var createModArgs = require('../internal/createModArgs');

/**
 * This method is like `_.modArgs` except that each of the `transforms` is
 * provided the complete set of arguments the created function is invoked with.
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
 * function divide(x, y) {
 *   return x / y;
 * }
 *
 * function multiply(x, y) {
 *   return x * y;
 * }
 *
 * var modded = _.modArgsSet(function(x, y) {
 *   return [x, y];
 * }, multiply, divide);
 *
 * modded(9, 3);
 * // => [27, 3]
 *
 * modded(10, 5);
 * // => [50, 2]
 */
var modArgsSet = createModArgs(function(value, index, args) {
  return args;
});

module.exports = modArgsSet;
