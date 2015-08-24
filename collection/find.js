var baseEach = require('../internal/baseEach'),
    baseFind = require('../internal/baseFind'),
    baseFindIndex = require('../internal/baseFindIndex'),
    baseIteratee = require('../internal/baseIteratee'),
    isArray = require('../lang/isArray');

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three arguments:
 * (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object} collection The collection to search.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var resolve = _.partial(_.result, _, 'user');
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * resolve( _.find(users, function(o) { return o.age < 40; }) );
 * // => 'barney'
 *
 * // using the `_.matches` callback shorthand
 * resolve( _.find(users, { 'age': 1, 'active': true }) );
 * // => 'pebbles'
 *
 * // using the `_.matchesProperty` callback shorthand
 * resolve( _.find(users, ['active', false]) );
 * // => 'fred'
 *
 * // using the `_.property` callback shorthand
 * resolve( _.find(users, 'active') );
 * // => 'barney'
 */
function find(collection, predicate) {
  predicate = baseIteratee(predicate, 3);
  if (isArray(collection)) {
    var index = baseFindIndex(collection, predicate);
    return index > -1 ? collection[index] : undefined;
  }
  return baseFind(collection, predicate, baseEach);
}

module.exports = find;
