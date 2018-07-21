import NBPService from "./NBPService";
import Mocks from "./test/mocks";

class WJSConverter {
  constructor(rateList) {
    this.NBPService = new NBPService();
    this.rateList = rateList;
    this.convertObject = Mocks.currenciesTable;
  }

  convert(value, currencyFrom, currencyTo) {
    console.log('🦑 this.convertObject ', this.convertObject);
        
    currencyFrom = currencyFrom.toLowerCase();
    currencyTo = currencyTo.toLowerCase();
    if(currencyFrom !== currencyTo) {
      value *= this.convertObject[currencyTo][currencyFrom];
    }
    return Number(value).toFixed(2);
  }

  async generateConvertTable(currentRateContainer, inputCurrency) {
    this.convertObject = await this.createConvertObject();
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

  async createConvertObject() {
    const currencies = ['pln', 'eur', 'usd', 'gbp', 'chf'];
    const currenciesTable = {};
    currenciesTable['pln'] = {};
    currencies.forEach(async currency => {
      if (currency !== 'pln') {
        const currentRate = await this.NBPService.fetchCurrentRate(currency);
        currenciesTable['pln'][currency] = currentRate;
      }
    })

    return Mocks.currenciesTable;
  }
}

export default WJSConverter;