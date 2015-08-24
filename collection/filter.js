var arrayFilter = require('../internal/arrayFilter'),
    baseFilter = require('../internal/baseFilter'),
    baseIteratee = require('../internal/baseIteratee'),
    isArray = require('../lang/isArray');

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three arguments:
 * (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @example
 *
 * var resolve = _.partial(_.map, _, 'user');
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * resolve( _.filter(users, function(o) { return !o.active; }) );
 * // => ['fred']
 *
 * // using the `_.matches` callback shorthand
 * resolve( _.filter(users, { 'age': 36, 'active': true }) );
 * // => ['barney']
 *
 * // using the `_.matchesProperty` callback shorthand
 * resolve( _.filter(users, ['active', false]) );
 * // => ['fred']
 *
 * // using the `_.property` callback shorthand
 * resolve( _.filter(users, 'active') );
 * // => ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;
