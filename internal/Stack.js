import stackDelete from './stackDelete';
import stackGet from './stackGet';
import stackHas from './stackHas';
import stackSet from './stackSet';

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @param {Array} [values] The values to cache.
 */
function Stack(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = { 'array': [], 'map': null };
  while (++index < length) {
    var entry = values[index];
    this.set(entry[0], entry[1]);
  }
}

// Add functions to the `Stack` cache.
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

export default Stack;
