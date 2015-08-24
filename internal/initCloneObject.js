/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  var Ctor = object.constructor;
  return (typeof Ctor == 'function' && Ctor instanceof Ctor) ? new Ctor : {};
}

module.exports = initCloneObject;
