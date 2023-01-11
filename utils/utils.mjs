/**
 * 
 * @param n
 * @param precision
 * @returns {number}
 */

export function round(n, precision = 1) {
    // return Math.round(n);
    const exponent = Math.pow(10, precision);
    return Math.round(n * exponent) / exponent;
}