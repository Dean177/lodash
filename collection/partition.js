var createAggregator = require('../internal/createAggregator');

/**
 * Creates an array of elements split into two groups, the first of which
 * contains elements `predicate` returns truthy for, while the second of which
 * contains elements `predicate` returns falsey for. The predicate is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the array of grouped elements.
 * @example
 *
 * var resolve = function(result) {
 *   return _.map(result, function(array) { return _.map(array, 'user'); });
 * };
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 * resolve( _.partition(users, function(o) { return o.active; }) );
 * // => [['fred'], ['barney', 'pebbles']]
 *
 * // using the `_.matches` callback shorthand
 * resolve( _.partition(users, { 'age': 1, 'active': false }) );
 * // => [['pebbles'], ['barney', 'fred']]
 *
 * // using the `_.matchesProperty` callback shorthand
 * resolve( _.partition(users, ['active', false]) );
 * // => [['barney', 'pebbles'], ['fred']]
 *
 * // using the `_.property` callback shorthand
 * resolve( _.partition(users, 'active') );
 * // => [['fred'], ['barney', 'pebbles']]
 */
var partition = createAggregator(function(result, value, key) {
  result[key ? 0 : 1].push(value);
}, function() { return [[], []]; });

module.exports = partition;
