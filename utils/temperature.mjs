console.log("Temperature");
import { round } from './utils.mjs';

export  function farenheitToCelcius(f) {
    if (f < -459.67) console.error(`${f}°F is too cold`);
    return round((f - 32.00) / 1.8000);
}

export function celciusToFarenheit(c) {
    if (c < -273.15) console.error(`${c}°C is too cold`);
    return round(c * 1.8000 + 32);
}

/*
function round(n, precision = 1) {
    // return Math.round(n);
    const exponent = Math.pow(10, precision);
    return Math.round(n * exponent) / exponent;
}
*/
/*
console.log(`-40°C = ${celciusToFarenheit(-40)}°F`);
console.log(`0°C = ${celciusToFarenheit(0)}°F`);
console.log(`37°C = ${celciusToFarenheit(37)}°F`);
console.log(`100°C = ${celciusToFarenheit(100)}°F`);

console.log(`-40°F = ${celciusToFarenheit(-40)}°C`);
console.log(`32°F = ${celciusToFarenheit(32)}°C`);
console.log(`98.6°F = ${celciusToFarenheit(98.6)}°C`);
console.log(`212°F = ${celciusToFarenheit(212)}°C`);
*/