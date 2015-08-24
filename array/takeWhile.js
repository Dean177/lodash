var baseIteratee = require('../internal/baseIteratee'),
    baseWhile = require('../internal/baseWhile');

/**
 * Creates a slice of `array` with elements taken from the beginning. Elements
 * are taken until `predicate` returns falsey. The predicate is invoked with
 * three arguments: (value, index, array).
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
 *   { 'user': 'fred',    'active': false},
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * resolve( _.takeWhile(users, function(o) { return !o.active; }) );
 * // => ['barney', 'fred']
 *
 * // using the `_.matches` callback shorthand
 * resolve( _.takeWhile(users, { 'user': 'barney', 'active': false }) );
 * // => ['barney']
 *
 * // using the `_.matchesProperty` callback shorthand
 * resolve( _.takeWhile(users, ['active', false]) );
 * // => ['barney', 'fred']
 *
 * // using the `_.property` callback shorthand
 * resolve( _.takeWhile(users, 'active') );
 * // => []
 */
function takeWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate, 3))
    : [];
}

module.exports = takeWhile;
