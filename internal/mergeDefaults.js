import baseClone from './baseClone';
import baseMerge from './baseMerge';
import isObject from '../lang/isObject';

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @returns {*} Returns the value to assign.
 */
function mergeDefaults(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, mergeDefaults, stack);
  }
  return objValue === undefined ? baseClone(srcValue) : objValue;
}

export default mergeDefaults;
