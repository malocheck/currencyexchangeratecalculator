//LIST OF CURRENCIES SELECTS
const selectedFromCurrency = document.getElementById('fromcurrencytypeone');
const selectedToCurrency = document.getElementById('tocurrencytypetwo');

//INPUTS AND RESULTS INPUT
const resultFromCurrency = document.getElementById('fromcurrencyone');
const resultToCurrency = document.getElementById('tocurrencytwo');

const exchangeRate = new XMLHttpRequest();
exchangeRate.open('GET', 'https://openexchangerates.org/api/latest.json?app_id=2c6d838f744844cd81ef87ec5ba83624')

//BASIC ONLOAD FUNCTION
exchangeRate.onload = function(){
    const listOfExchangeRates = JSON.parse(exchangeRate.response);
    (selectedFromCurrency.value === 'USD' && selectedToCurrency.value === 'EUR') ? resultToCurrency.value = (parseFloat(resultFromCurrency.value) * parseFloat(listOfExchangeRates.rates[selectedToCurrency.value])).toFixed(2) : alert("Something is wrong!");
}

function calculateFrom(){
const listOfExchangeRates = JSON.parse(exchangeRate.response);
    if(selectedFromCurrency.value === 'USD' && selectedToCurrency.value === 'EUR') {
        resultToCurrency.value = (parseFloat(resultFromCurrency.value) * parseFloat(listOfExchangeRates.rates[selectedToCurrency.value])).toFixed(2);
    } else {
        resultToCurrency.value = (parseFloat(resultFromCurrency.value) * parseFloat(listOfExchangeRates.rates[selectedToCurrency.value])/parseFloat(listOfExchangeRates.rates[selectedFromCurrency.value])).toFixed(2);
    }
}

function calculateTo(){
    const listOfExchangeRates = JSON.parse(exchangeRate.response);
    if(selectedFromCurrency.value === 'USD' && selectedToCurrency.value === 'EUR') {
        resultFromCurrency.value = (parseFloat(resultToCurrency.value) / parseFloat(listOfExchangeRates.rates[selectedToCurrency.value])).toFixed(2);
    } else {
        resultFromCurrency.value = (parseFloat(resultToCurrency.value) * parseFloat(listOfExchangeRates.rates[selectedFromCurrency.value])/parseFloat(listOfExchangeRates.rates[selectedToCurrency.value])).toFixed(2);
    }
}

//EVENTS INPUT
resultFromCurrency.addEventListener('input', calculateFrom);
resultToCurrency.addEventListener('input', calculateTo);
//EVENTS CHANGE
selectedFromCurrency.addEventListener('change', calculateFrom);
selectedToCurrency.addEventListener ('change', calculateTo);

exchangeRate.send();


