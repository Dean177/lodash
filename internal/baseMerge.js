var Stack = require('./Stack'),
    arrayEach = require('./arrayEach'),
    assignMergeValue = require('./assignMergeValue'),
    baseMergeDeep = require('./baseMergeDeep'),
    isArray = require('../lang/isArray'),
    isObject = require('../lang/isObject'),
    isTypedArray = require('../lang/isTypedArray'),
    keysIn = require('../object/keysIn');

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed sources and their value counterparts.
 */
function baseMerge(object, source, customizer, stack) {
  if (object === source) {
    return;
  }
  var props = (isArray(source) || isTypedArray(source)) ? undefined : keysIn(source);
  arrayEach(props || source, function(srcValue, key) {
    if (props) {
      key = srcValue;
      srcValue = source[key];
    }
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer ? customizer(object[key], srcValue, (key + ''), object, source, stack) : undefined;
      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  });
}

module.exports = baseMerge;
