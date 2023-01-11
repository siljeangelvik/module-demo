import { round } from "./utils.mjs";

export async function currencyConverter(amount, from, to, out) {
    console.log(`Convert ${from} ${amount} into ${to} and put in ${out}`);
    const requestURL = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
    
    /*
    let request = new XMLHttpRequest() ;
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        let response = request.response;
        console.log(response);
    }
     */
    
    fetch(requestURL)
        .then((response) => response.json())
        .then((data) => {
           let result = round(amount * data.result); 
           console.log(result);
           out.innerText = `${from} ${amount} = ${to} ${result}`;
        });
}

export async function getAllCurrencies() {
    let requestURL = 'https://api.exchangerate.host/symbols';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        let response = request.response;
        console.log(response.symbols);
    }
}