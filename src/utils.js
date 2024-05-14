// Compiled using undefined undefined (TypeScript 4.9.5)
var exports = exports || {};
var module = module || { exports: exports };
exports.toCelsius = exports.toFarenheit = void 0;
var ratio = 9.0 / 5.0;
function toFarenheit(input) {
    return (input * ratio) + 32.0;
}
exports.toFarenheit = toFarenheit;
function toCelsius(input) {
    return (input - 32.0) / ratio;
}
exports.toCelsius = toCelsius;
