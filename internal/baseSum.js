/**
 * The base implementation of `_.sum` without support for callback shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current === current && current != null) {
      result = result === undefined ? current : (result + current);
    }
  }
  return result;
}

module.exports = baseSum;
