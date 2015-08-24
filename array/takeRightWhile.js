var baseIteratee = require('../internal/baseIteratee'),
    baseWhile = require('../internal/baseWhile');

/**
 * Creates a slice of `array` with elements taken from the end. Elements are
 * taken until `predicate` returns falsey. The predicate is invoked with three
 * arguments: (value, index, array).
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
 * resolve( _.takeRightWhile(users, function(o) { return !o.active; }) );
 * // => ['fred', 'pebbles']
 *
 * // using the `_.matches` callback shorthand
 * resolve( _.takeRightWhile(users, { 'user': 'pebbles', 'active': false }) );
 * // => ['pebbles']
 *
 * // using the `_.matchesProperty` callback shorthand
 * resolve( _.takeRightWhile(users, ['active', false]) );
 * // => ['fred', 'pebbles']
 *
 * // using the `_.property` callback shorthand
 * resolve( _.takeRightWhile(users, 'active') );
 * // => []
 */
function takeRightWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate, 3), false, true)
    : [];
}

module.exports = takeRightWhile;
