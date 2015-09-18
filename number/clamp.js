import toNumber from '../lang/toNumber';

/**
 * Returns a number whose value is limited to the given range specified
 * by `min` and `max`.
 *
 * @static
 * @memberOf _
 * @category Number
 * @param {number} number The number whose value is to be limited.
 * @param {number} [min] The minimum possible value.
 * @param {number} max The maximum possible value.
 * @returns {number} A number in the range [min, max].
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, min, max) {
  number = toNumber(number);
  if (number === number) {
    if (max === undefined) {
      max = min;
      min = undefined;
    }
    if (max !== undefined) {
      max = toNumber(max);
      max = max === max ? max : 0;
      number = number <= max ? number : max;
    }
    if (min !== undefined) {
      min = toNumber(min);
      min = min === min ? min : 0;
      number = number >= min ? number : min;
    }
  }
  return number;
}

export default clamp;
