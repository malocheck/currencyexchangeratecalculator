const fromCurrencyNames = new XMLHttpRequest();
fromCurrencyNames.open('GET', 'https://openexchangerates.org/api/currencies.json?app_id=2c6d838f744844cd81ef87ec5ba83624');
fromCurrencyNames.onload = function() {
    const listOfCurencies = JSON.parse(fromCurrencyNames.response);
    const listOfCurShortcut = Object.keys(listOfCurencies);

    for (let i = 0; i < listOfCurShortcut.length; i++){
        let currencyOption = document.createElement('option');
        currencyOption.innerHTML = listOfCurShortcut[i];
        let visibleListOfCurrencies = document.getElementById('fromcurrencytypeone');
        visibleListOfCurrencies.append(currencyOption);
    };
}

const toCurrencyNames = new XMLHttpRequest();
toCurrencyNames.open('GET', 'https://openexchangerates.org/api/currencies.json?app_id=2c6d838f744844cd81ef87ec5ba83624');
toCurrencyNames.onload = function() {
    const listOfCurencies = JSON.parse(toCurrencyNames.response);
    const listOfCurShortcut = Object.keys(listOfCurencies);

    for (let i = 0; i < listOfCurShortcut.length; i++){
        let currencyOption = document.createElement('option');
        currencyOption.innerHTML = listOfCurShortcut[i];
        let visibleListOfCurrencies = document.getElementById('fromcurrencytypetwo');
        visibleListOfCurrencies.append(currencyOption);
    };
}


fromCurrencyNames.send(); 
toCurrencyNames.send();