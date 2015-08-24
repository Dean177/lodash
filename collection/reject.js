var arrayFilter = require('../internal/arrayFilter'),
    baseFilter = require('../internal/baseFilter'),
    baseIteratee = require('../internal/baseIteratee'),
    isArray = require('../lang/isArray');

/**
 * The opposite of `_.filter`; this method returns the elements of `collection`
 * that `predicate` does **not** return truthy for.
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
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': true }
 * ];
 *
 * resolve( _.reject(users, function(o) { return !o.active; }) );
 * // => ['fred']
 *
 * // using the `_.matches` callback shorthand
 * resolve( _.reject(users, { 'age': 40, 'active': true }) );
 * // => ['barney']
 *
 * // using the `_.matchesProperty` callback shorthand
 * resolve( _.reject(users, ['active', false]) );
 * // => ['fred']
 *
 * // using the `_.property` callback shorthand
 * resolve( _.reject(users, 'active') );
 * // => ['barney']
 */
function reject(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  predicate = baseIteratee(predicate, 3);
  return func(collection, function(value, index, collection) {
    return !predicate(value, index, collection);
  });
}

module.exports = reject;
