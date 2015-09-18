import Stack from './Stack';
import arrayPush from './arrayPush';
import isArguments from '../lang/isArguments';
import isArray from '../lang/isArray';
import isArrayLikeObject from '../lang/isArrayLikeObject';

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {boolean} [isDeep] Specify a deep flatten.
 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
 * @param {Array} [result=[]] The initial result value.
 * @param {Object} [stack] Tracks traversed arrays.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, isDeep, isStrict, result, stack) {
  result || (result = []);

  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index];
    if (isArrayLikeObject(value) &&
        (isStrict || isArray(value) || isArguments(value))) {
      if (isDeep) {
        stack || (stack = new Stack);
        if (stack.get(array)) {
          return result;
        }
        stack.set(array, true);

        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, isDeep, isStrict, result, stack);

        stack['delete'](array);
      }
      else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

export default baseFlatten;
