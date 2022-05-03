const exchangeRate = new XMLHttpRequest();
exchangeRate.open('GET', 'https://openexchangerates.org/api/latest.json?app_id=2c6d838f744844cd81ef87ec5ba83624')
exchangeRate.onload = function(){
    const listOfExchangeRates = JSON.parse(exchangeRate.response);
    const exchangeRatesCurrencies = Object.keys(listOfExchangeRates.rates);

    for (let i = 0; i < exchangeRatesCurrencies.length; i++){
        //FROM CURRENCY INPUT
        let fromCurrencyOption = document.createElement('option');
        fromCurrencyOption.innerHTML = exchangeRatesCurrencies[i];
        if (fromCurrencyOption.innerHTML === "USD"){
            fromCurrencyOption.setAttribute("selected", "true");
        };
        let visibleListOfFromCurrencies = document.getElementById('fromcurrencytypeone');
        visibleListOfFromCurrencies.append(fromCurrencyOption);

        //TO CURRENCY INPUT
        let toCurrencyOption = document.createElement('option');
        toCurrencyOption.innerHTML = exchangeRatesCurrencies[i];
        if (toCurrencyOption.innerHTML === "EUR"){
            toCurrencyOption.setAttribute("selected", "true");
        };
        let visibleListOfToCurrencies = document.getElementById('fromcurrencytypetwo');
        visibleListOfToCurrencies.append(toCurrencyOption);
    };


    console.log(exchangeRatesCurrencies);
    console.log(listOfExchangeRates.rates);
    

    }


function calculateExchange(){
    //onload event should be calculated
    //on change event - there is one thing we have the exchange rates for the base currency and it would be necessary to really 
    //recalculate the exchange rates - what if the user chooses different exchange rate than USD? USD to EUR or any other is pretty easy
    //but what about CZK to EUR when we have the courses just for USD vs other currencies?
}

exchangeRate.send();