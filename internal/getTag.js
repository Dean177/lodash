var Map = require('./Map'),
    Set = require('./Set');

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = global.Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = global.Function.prototype.toString;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect maps and sets. */
var mapCtorString = Map ? fnToString.call(Map) : '',
    setCtorString = Set ? fnToString.call(Set) : '';

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value) {
  return objToString.call(value);
}

// Fallback for IE 11 providing `toStringTag` values for maps and sets.
if ((Map && getTag(new Map) != mapTag) || (Set && getTag(new Set) != setTag)) {
  getTag = function(value) {
    var result = objToString.call(value),
        Ctor = result == objectTag ? value.constructor : null,
        ctorString = typeof Ctor == 'function' ? fnToString.call(Ctor) : '';

    if (ctorString) {
      if (ctorString == mapCtorString) {
        return mapTag;
      }
      if (ctorString == setCtorString) {
        return setTag;
      }
    }
    return result;
  };
}

module.exports = getTag;
