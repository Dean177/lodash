var baseSortByOrder = require('../internal/baseSortByOrder'),
    isArray = require('../lang/isArray');

/**
 * This method is like `_.sortBy` except that it allows specifying the
 * sort orders of the iteratees to sort by. If `orders` is unspecified, all
 * values are sorted in ascending order. Otherwise, a value is sorted in
 * ascending order if its corresponding order is "asc", and descending if "desc".
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} [iteratees=[_.identity]] The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var resolve = _.partial(_.map, _, _.values);
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 42 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // sort by `user` in ascending order and by `age` in descending order
 * resolve( _.sortByOrder(users, ['user', 'age'], ['asc', 'desc']) );
 * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
 */
function sortByOrder(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseSortByOrder(collection, iteratees, orders);
}

module.exports = sortByOrder;
