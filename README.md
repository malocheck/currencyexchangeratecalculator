# currencyexchangeratecalculator
 This is the solution for case study to participate in Purple Academy

1) I have decided to use the values for currencies within the HTML code. Firstly, I wanted to get them from the API, but I do not think, that there is lot of new currencies created very often so I consider the list more as a static source of data then dynamic that needs to be rendered on load every time the user visit the website.

2) As the source for the exchange rate I used the API from openexchangerates.org

3) My solution is pretty simple based on 3 main functions. The first function runs onload and it shows the exchange rate for the USD and EUR pair

4) You can simply write the number into the inputs and it automatically calculates the output for you.

5) You can also switch the currencies and choose your preffered pair from the drop down list. It automatically calculate the calues on change of the currencies.

6) When looking for the right solution I realized that the API I am using has only one base currency: USD and all the exchange rates are against the USD. So I was googling the right approach how to calculate the exchange rates with this data available. I took an example: when I have one pair USD/EUR and USD/CZK it should be possible to get also EUR/CZK and CZK/EUR. For this I got an inspiration from cross currency triangulation where one currency is converted to another via a third common currency - which in my case is USD (as a base and common currency).


WHAT COULD BE BETTER?
1) I have not managed to create my own API and also saving the data to the server/file and then display it. Right now I am in the process of learning both of the other mentioned tasks. Right now I would manage to save the data using the localStorage or sessionStorage, but I know that this is just temporary solution.

