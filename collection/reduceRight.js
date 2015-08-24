var arrayReduceRight = require('../internal/arrayReduceRight'),
    baseEachRight = require('../internal/baseEachRight'),
    baseIteratee = require('../internal/baseIteratee'),
    baseReduce = require('../internal/baseReduce'),
    isArray = require('../lang/isArray');

/**
 * This method is like `_.reduce` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * var array = [[0, 1], [2, 3], [4, 5]];
 *
 * _.reduceRight(array, function(flattened, other) {
 *   return flattened.concat(other);
 * }, []);
 * // => [4, 5, 2, 3, 0, 1]
 */
function reduceRight(collection, iteratee, accumulator) {
  var initFromCollection = arguments.length < 3;
  return (typeof iteratee == 'function' && isArray(collection))
    ? arrayReduceRight(collection, iteratee, accumulator, initFromCollection)
    : baseReduce(collection, baseIteratee(iteratee, 4), accumulator, initFromCollection, baseEachRight);
}

module.exports = reduceRight;
