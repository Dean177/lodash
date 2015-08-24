var baseIteratee = require('../internal/baseIteratee'),
    baseWhile = require('../internal/baseWhile');

/**
 * Creates a slice of `array` excluding elements dropped from the beginning.
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
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * resolve( _.dropWhile(users, function(o) { return !o.active; }) );
 * // => ['pebbles']
 *
 * // using the `_.matches` callback shorthand
 * resolve( _.dropWhile(users, { 'user': 'barney', 'active': false }) );
 * // => ['fred', 'pebbles']
 *
 * // using the `_.matchesProperty` callback shorthand
 * resolve( _.dropWhile(users, ['active', false]) );
 * // => ['pebbles']
 *
 * // using the `_.property` callback shorthand
 * resolve( _.dropWhile(users, 'active') );
 * // => ['barney', 'fred', 'pebbles']
 */
function dropWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate, 3), true)
    : [];
}

module.exports = dropWhile;
