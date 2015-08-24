var baseFlatten = require('../internal/baseFlatten'),
    baseSortByOrder = require('../internal/baseSortByOrder'),
    isIterateeCall = require('../internal/isIterateeCall'),
    rest = require('../function/rest');

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection through each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[]|Object|Object[]|string|string[])} [iteratees=[_.identity]]
 *  The iteratees to sort by, specified individually or in arrays.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var resolve = _.partial(_.map, _, _.values);
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 42 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * resolve( _.sortBy(users, function(o) { return o.user; }) );
 * // => // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
 *
 * resolve( _.sortBy(users, ['user', 'age']) );
 * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
 *
 * resolve( _.sortBy(users, 'user', function(o) {
 *   return Math.floor(o.age / 10);
 * }) );
 * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
 */
var sortBy = rest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees.length = 1;
  }
  return baseSortByOrder(collection, baseFlatten(iteratees), []);
});

module.exports = sortBy;
