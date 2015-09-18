import baseExtremum from '../internal/baseExtremum';
import baseIteratee from '../internal/baseIteratee';
import lt from '../lang/lt';

/**
 * This method is like `_.min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 }
 * ];
 *
 * _.minBy(users, function(o) { return o.age; });
 * // => { 'user': 'barney', 'age': 36 }
 *
 * // using the `_.property` callback shorthand
 * _.minBy(users, 'age');
 * // => { 'user': 'barney', 'age': 36 }
 */
function minBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee), lt)
    : undefined;
}

export default minBy;
