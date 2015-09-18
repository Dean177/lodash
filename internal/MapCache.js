import Hash from './Hash';
import Map from './Map';
import mapDelete from './mapDelete';
import mapGet from './mapGet';
import mapHas from './mapHas';
import mapSet from './mapSet';

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @param {Array} [values] The values to cache.
 */
function MapCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = { 'hash': new Hash, 'map': Map ? new Map : [], 'string': new Hash };
  while (++index < length) {
    var entry = values[index];
    this.set(entry[0], entry[1]);
  }
}

// Add functions to the `MapCache`.
MapCache.prototype['delete'] = mapDelete;
MapCache.prototype.get = mapGet;
MapCache.prototype.has = mapHas;
MapCache.prototype.set = mapSet;

export default MapCache;
