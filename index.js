/* Fibonacci Numbers */
import fibonacci from "./utils/fibonacci.mjs";
// console.log("f(5)", fibonacci(5));
document.getElementById("submit-fib").addEventListener('click', () => {
    let n = document.getElementById("fib").value;
    let fn = fibonacci(n);
    document.getElementById("fib-result").innerHTML = `F<sub>${n}</sub> = ${fn}`;
});


/* Temperature Converter*/
import {farenheitToCelcius, celciusToFarenheit} from "./utils/temperature.mjs";

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
    } else {
        out.innerText = "Something shady is going on!"
    }
});


/** Currency Converter */
import {currencyConverter, getAllCurrencies} from "./utils/currency.mjs";

document.getElementById("submit-currency").addEventListener('click', () => {
    const out = document.getElementById("currency-result");
    let amount = document.getElementById("amount").value;
    const from = document.getElementById("convertFrom").value;
    const to = document.getElementById("convertTo").value;

    if (amount === "") amount = 100;
    currencyConverter(amount, from, to, out);
});

const fromCurrencyList = document.getElementById("convertFromSymbols");
const toCurrencyList = document.getElementById("convertToSymbols");

getAllCurrencies(fromCurrencyList, toCurrencyList);
// getAllCurrencies();


/* Filter/Search Amiibos */
import {getAllAmiibos, filterAmiibos} from "./utils/amiibos.mjs";

const outPutElement = document.getElementById("amiibos");
getAllAmiibos(outPutElement);

let searchBox = document.getElementById("search-amiibos");
searchBox.addEventListener('input', updateSearch);

let nameCheckBox = document.getElementById("amiibo-name");
nameCheckBox.addEventListener('input', updateSearch);

let gameSeriesCheckBox = document.getElementById("amiibo-game");
gameSeriesCheckBox.addEventListener('input', updateSearch);

let amiiboSeriesCheckBox = document.getElementById("amiibo-series");
amiiboSeriesCheckBox.addEventListener('input', updateSearch);


/* callback function */
function updateSearch() {
    console.log("HELLO");
    let searchString = searchBox.value;
    let nameOpt = nameCheckBox.checked;
    let gameSeriesOpt = gameSeriesCheckBox.checked;
    let amiiboSeriesOpt = amiiboSeriesCheckBox.checked;

    let options = {nameOpt, gameSeriesOpt, amiiboSeriesOpt};
    // console.log(`Will search for ${searchString}`);
    console.log(`Will search for ${searchString}`, options);
    // filterAmiibos(searchString, outPutElement);
    filterAmiibos(searchString, outPutElement, options);
}

document.getElementById("openAll").addEventListener('click', () => {
    toggleDetails("open");
});

document.getElementById("closeAll").addEventListener('click', () => {
    toggleDetails("close");
});


function toggleDetails(mode) {
    let detailsElements = document.querySelectorAll("details");
    console.log(detailsElements.length);
    for (let element of detailsElements) {
        if (mode === "open") element.setAttribute('open', true);
        if (mode === "close") element.removeAttribute('open');
    }
}