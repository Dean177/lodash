var baseIteratee = require('../internal/baseIteratee'),
    isArray = require('../lang/isArray'),
    isObjectLike = require('../lang/isObjectLike'),
    matches = require('./matches');

/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name the created callback returns the
 * property value for a given element. If `func` is an object the created
 * callback returns `true` for elements that contain the equivalent object properties, otherwise it returns `false`.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 }
 * ];
 *
 * // wrap to create custom callback shorthands
 * _.iteratee = _.wrap(_.iteratee, function(callback, func, thisArg) {
 *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
 *   if (!match) {
 *     return callback(func, thisArg);
 *   }
 *   return function(object) {
 *     return match[2] == 'gt'
 *       ? object[match[1]] > match[3]
 *       : object[match[1]] < match[3];
 *   };
 * });
 *
 * _.filter(users, 'age__gt36');
 * // => [{ 'user': 'fred', 'age': 40 }]
 */
function iteratee(func) {
  return (isObjectLike(func) && !isArray(func))
    ? matches(func)
    : baseIteratee(func);
}

module.exports = iteratee;
