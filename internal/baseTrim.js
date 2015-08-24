var trimmedEndIndex = require('./trimmedEndIndex'),
    trimmedStartIndex = require('./trimmedStartIndex');

/**
 * The base implementation of `_.trim` without support trimming non-whitespace
 * characters.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(trimmedStartIndex(string), trimmedEndIndex(string) + 1)
    : string;
}

module.exports = baseTrim;
