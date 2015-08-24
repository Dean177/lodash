var baseIteratee = require('../internal/baseIteratee'),
    baseWhile = require('../internal/baseWhile');

/**
 * Creates a slice of `array` excluding elements dropped from the end.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var resolve = _.partial(_.map, _, 'user');
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * resolve( _.dropRightWhile(users, function(o) { return !o.active; }) );
 * // => ['barney']
 *
 * // using the `_.matches` callback shorthand
 * resolve( _.dropRightWhile(users, { 'user': 'pebbles', 'active': false }) );
 * // => ['barney', 'fred']
 *
 * // using the `_.matchesProperty` callback shorthand
 * resolve( _.dropRightWhile(users, ['active', false]) );
 * // => ['barney']
 *
 * // using the `_.property` callback shorthand
 * resolve( _.dropRightWhile(users, 'active') );
 * // => ['barney', 'fred', 'pebbles']
 */
function dropRightWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate, 3), true, true)
    : [];
}

module.exports = dropRightWhile;
