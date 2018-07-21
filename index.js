const currencies = {
    "EUR": "4.3036",
    "USD": "3.7031",
    "CHF": "3.6941",
    "GBP": "4.8276"
};

const input = document.querySelector('#input-value');
const inputCurrency = document.querySelector('#input-currency');
const outputCurrency = document.querySelector('#output-currency');
const resultContainer = document.querySelector('#result');
const rateList = document.querySelector('section.rate ul')
const currentRateContainer = document.querySelector('#current-rate')

const convertObject = {
    /*currencyTo: { currencyFrom: rate }*/
    'pln': { 'eur': 4.25, 'usd': 3.59, 'gpb': 4.62, 'chf': 3.69 },
    'eur': { 'pln': 0.23, 'usd': 0.84, 'gpb': 1.08, 'chf': 0.86 },
    'usd': { 'eur': 1.18, 'pln': 0.27, 'gpb': 1.28, 'chf': 1.03 },
    'gpb': { 'pln': 0.21, 'eur': 0.92, 'usd': 0.77, 'chf': 0.80 },
    'chf': { 'pln': 0.27, 'eur': 1.16, 'usd': 0.97, 'gpb': 1.25 }
};

function convert(value, currencyFrom, currencyTo) {
    currencyFrom = currencyFrom.toLowerCase();
    currencyTo = currencyTo.toLowerCase();

    if(currencyFrom !== currencyTo) {
        value *= convertObject[currencyTo][currencyFrom];
    }

    return value.toFixed(2);
}

const generateConvertTable = () => {
    currentRateContainer.innerText = inputCurrency.value
    rateList.innerHTML = null

    Object.keys(convertObject[inputCurrency.value.toLowerCase()]).map(currencyName => {
        const listElement = document.createElement('li')
        const currencyNameContainer = document.createElement('span')
        const currencyRate = document.createElement('span')

        currencyNameContainer.innerText = currencyName
        currencyRate.innerText = convertObject[inputCurrency.value.toLowerCase()][currencyName]

        listElement.appendChild(currencyNameContainer)
        listElement.appendChild(currencyRate)

        rateList.appendChild(listElement)
    })
}
generateConvertTable()

inputCurrency.addEventListener('change', event => {
    resultContainer.innerText = convert(input.value, inputCurrency.value, outputCurrency.value);
    generateConvertTable()
});
outputCurrency.addEventListener('change', event => {
    resultContainer.innerText = convert(input.value, inputCurrency.value, outputCurrency.value);
    generateConvertTable()
});
input.addEventListener('keyup', event => {
    resultContainer.innerText = convert(input.value, inputCurrency.value, outputCurrency.value);
    generateConvertTable()
});
