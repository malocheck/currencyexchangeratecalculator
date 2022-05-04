# currencyexchangeratecalculator
 This is my solution for the first level of case study to participate in Purple Academy

 When looking for the right solution I realized that the API I am using has only one base currency: USD and all the exchange rates are against the USD. So I was googling the right approach how to calculate the exchange rates with this data available. I took an example: when I have one pair USD/EUR and USD/CZK it should be possible to get also EUR/CZK and CZK/EUR. For this I got an inspiration from cross currency triangulation where one currency is converted to another via a third common currency - which in my case is USD (as a base and common currency).

1) I have decided to use the values for currencies within the HTML code. Firstly, I wanted to get them from the API, but I do not think, that there is lot of new currencies created very often so I consider the list more as a static source of data then dynamic that needs to be rendered on load every time the user visit the website.

2) As the source for the exchange rate I used the API from openexchangerates.org

3) My solution is pretty simple based on 3 main functions. The first function runs onload and it shows the exchange rate for the USD and EUR pair

4) You can simply write the number into the inputs and it automatically calculates the output for you.

5) You can also switch the currencies and choose your preffered pair from the drop down list. It automatically calculate the calues on change of the currencies.


WHAT COULD BE BETTER?
1) I have not managed to create my own API and also saving the data to the server/file and then display it. Right now I am in the process of learning both of these mentioned tasks. Right now I would manage to save the data using the localStorage or sessionStorage, but I know that this is just temporary solution.

2) There could be a lot of good functionalities like for example setting up the currency that we would like to change from based on the location we are entering the website from. (So for example if we are in Czech republic coming to the website - we will automatically after entering the website will be seeing the CZK to EUR for example)

