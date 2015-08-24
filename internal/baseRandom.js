/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeRandom = Math.random;

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} min The minimum possible value.
 * @param {number} max The maximum possible value.
 * @returns {number} Returns the random number.
 */
function baseRandom(min, max) {
  return min + nativeFloor(nativeRandom() * (max - min + 1));
}

module.exports = baseRandom;
