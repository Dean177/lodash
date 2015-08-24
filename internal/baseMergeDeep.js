var assignMergeValue = require('./assignMergeValue'),
    baseClone = require('./baseClone'),
    copyArray = require('./copyArray'),
    isArguments = require('../lang/isArguments'),
    isArray = require('../lang/isArray'),
    isArrayLikeObject = require('../lang/isArrayLikeObject'),
    isFunction = require('../lang/isFunction'),
    isObject = require('../lang/isObject'),
    isPlainObject = require('../lang/isPlainObject'),
    isTypedArray = require('../lang/isTypedArray'),
    toPlainObject = require('../lang/toPlainObject');

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed sources and their value counterparts.
 */
function baseMergeDeep(object, source, key, mergeFunc, customizer, stack) {
  var oldValue = object[key],
      srcValue = source[key],
      stacked = stack.get(oldValue) || stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(oldValue, srcValue, (key + ''), object, source, stack) : undefined,
      isCommon = newValue === undefined;

  if (isCommon) {
    newValue = srcValue;
    if (isArray(srcValue) || isTypedArray(srcValue)) {
      newValue = isArray(oldValue)
        ? oldValue
        : ((isArrayLikeObject(oldValue)) ? copyArray(oldValue) : baseClone(srcValue));
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = isArguments(oldValue)
        ? toPlainObject(oldValue)
        : (isObject(oldValue) ? oldValue : baseClone(srcValue));
    }
    else {
      isCommon = isFunction(srcValue);
    }
  }
  stack.set(srcValue, newValue);

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    mergeFunc(newValue, srcValue, customizer, stack);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;
