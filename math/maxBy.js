import baseExtremum from '../internal/baseExtremum';
import baseIteratee from '../internal/baseIteratee';
import gt from '../lang/gt';

/**
 * This method is like `_.max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 }
 * ];
 *
 * _.maxBy(users, function(o) { return o.age; });
 * // => { 'user': 'fred', 'age': 40 }
 *
 * // using the `_.property` callback shorthand
 * _.maxBy(users, 'age');
 * // => { 'user': 'fred', 'age': 40 }
 */
function maxBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee), gt)
    : undefined;
}

export default maxBy;
