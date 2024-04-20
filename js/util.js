/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} input - The input string.
 * @returns {string} The input string with the first letter capitalized.
 */
function capitalize(input) {
  if (!input) {
    return '';
  }
  return input[0].toUpperCase() + input.slice(1);
}

/**
 * Shortens the given input to the specified length.
 * If the input is longer than the given length,
 * it will be truncated and an ellipsis (...) will be appended to the shortened text.
 *
 * @param {string} input - The text to be shortened.
 * @param {number} length - The maximum length of the shortened text.
 * @returns {string} - The shortened text.
 */
function shortenText(input, length) {
  return input.length > length ? `${input.substring(0, length)} ...` : input;
}

export {
  capitalize,
  shortenText,
};
