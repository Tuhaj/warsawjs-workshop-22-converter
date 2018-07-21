import NBPService from "./NBPService";

class WJSConverter {
  constructor(rateList) {
    this.NBPService = new NBPService();
    this.rateList = rateList;
    this.convertObject = this.createConvertObject();
  }

  convert(value, currencyFrom, currencyTo) {
    currencyFrom = currencyFrom.toLowerCase();
    currencyTo = currencyTo.toLowerCase();
    if(currencyFrom !== currencyTo) {
      value *= this.convertObject[currencyTo][currencyFrom];
    }
    return Number(value).toFixed(2);
  }

  generateConvertTable(currentRateContainer, inputCurrency) {
    currentRateContainer.innerText = inputCurrency.value;
    this.rateList.innerHTML = null;
    Object.keys(this.convertObject[inputCurrency.value.toLowerCase()]).map(currencyName => {
      const listElement = document.createElement('li');
      const currencyNameContainer = document.createElement('span');
      const currencyRate = document.createElement('span');

      currencyNameContainer.innerText = currencyName;
      currencyRate.innerText = this.convertObject[inputCurrency.value.toLowerCase()][currencyName];


      listElement.appendChild(currencyNameContainer);
      listElement.appendChild(currencyRate);

      this.rateList.appendChild(listElement);
    });
  }

  createConvertObject() {
    const currencies = ['pln', 'eur', 'usd', 'gbp', 'chf']
    const currenciesTable = {}
    currencies.forEach(currency => {
      if (currency !== 'pln') {
        const currentRate = this.NBPService.fetchCurrentRate(currency)
        currenciesTable['pln'][currency] = currentRate
      }
    })
    return {
      /*currencyTo: { currencyFrom: rate }*/
      'pln': { 'eur': 4.25, 'usd': 3.59, 'gbp': 4.62, 'chf': 3.69 },
      'eur': { 'pln': 0.23, 'usd': 0.84, 'gbp': 1.08, 'chf': 0.86 },
      'usd': { 'eur': 1.18, 'pln': 0.27, 'gbp': 1.28, 'chf': 1.03 },
      'gbp': { 'pln': 0.21, 'eur': 0.92, 'usd': 0.77, 'chf': 0.80 },
      'chf': { 'pln': 0.27, 'eur': 1.16, 'usd': 0.97, 'gbp': 1.25 }
    };
  }
}

export default WJSConverter;