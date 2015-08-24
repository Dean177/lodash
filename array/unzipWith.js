var arrayMap = require('../internal/arrayMap'),
    arrayReduce = require('../internal/arrayReduce'),
    unzip = require('./unzip');

/**
 * This method is like `_.unzip` except that it accepts `iteratee` to specify
 * how regrouped values should be combined. The iteratee is invoked with four
 * arguments: (accumulator, value, index, group). The first element of each
 * group is used as the initial `accumulator` value.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array of grouped elements to process.
 * @param {Function} [iteratee=_.identity] The function to combine regrouped values.
 * @returns {Array} Returns the new array of regrouped elements.
 * @example
 *
 * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
 * // => [[1, 10, 100], [2, 20, 200]]
 *
 * _.unzipWith(zipped, _.add);
 * // => [3, 30, 300]
 */
function unzipWith(array, iteratee) {
  if (!(array && array.length)) {
    return [];
  }
  var result = unzip(array);
  if (iteratee == null) {
    return result;
  }
  return arrayMap(result, function(group) {
    return arrayReduce(group, iteratee, undefined, true);
  });
}

module.exports = unzipWith;
