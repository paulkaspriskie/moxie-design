/**
 * Converts string to cammel case format.
 * @param {string} input to be converted to camel case.
 *
 * @returns {string} the input value converted to camel case.
 */
const formatCamelCase = (input) => {
  if (/^[A-Z][a-zA-Z0-9]*$/.test(input)) {
    return input[0].toLowerCase() + input.slice(1);
  }

  return input
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
};

/**
 * Converts string to kebab case format.
 * @param {string} input to be converted to kebab case.
 *
 * @returns {string} the input value converted to kebab case.
 */
const formatKebabCase = (input) => {
  return input
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

/**
 * Converts string to pascal case format.
 * @param {string} input to be converted to pascal case.
 *
 * @returns {string} the input value converted to pascal case.
 */
const formatPascalCase = (input) => {
  return input
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_\s]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};

module.exports = {
  formatCamelCase,
  formatKebabCase,
  formatPascalCase,
};
