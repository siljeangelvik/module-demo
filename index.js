import fibonacci from "./utils/fibonacci.mjs";
console.log("Hello");

console.log("f(5)", fibonacci(5));

document.getElementById("submit-fib").addEventListener('click', () => {
   let n = document.getElementById("fib").value;
   let fn = fibonacci(n);
   document.getElementById("fib-result").innerHTML = `F<sub>${n}</sub> = ${fn}`;
});


/** Temperature Converter */
import { farenheitToCelcius, celciusToFarenheit } from "./utils/temperature.mjs";

document.getElementById("submit-temp").addEventListener('click', () => {
   const out = document.getElementById("temp-result");
   const temp = document.getElementById("temp").value;
   const radioButtons = document.querySelectorAll('input[name="temp-type"]');
   
   let fromType;
   for (let btn of radioButtons) {
      if (btn.checked) {
         fromType = btn.id;
         break;
      }
   }
   
   if (fromType === 'celcius') {
      out.innerHTML = `${temp}°C = ${celciusToFarenheit(temp)}°F`;
   } else if (fromType === 'farenheit') {
      out.innerHTML = `${temp}°F = ${farenheitToCelcius(temp)}°C`;
   } else  { out.innerText = "Something shady is going on!" }
});

/** Currency Converter */
import { currencyConverter, getAllCurrencies } from "./utils/currency.mjs";
document.getElementById("submit-currency").addEventListener('click', () => {
   const out = document.getElementById("currency-result");
   let amount = document.getElementById("amount").value;
   const from = document.getElementById("convertFrom").value;
   const to = document.getElementById("convertTo").value;
   
   if (amount === "") amount = 100;
   currencyConverter(amount, from, to, out);
});

getAllCurrencies();