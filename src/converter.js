import NBPService from "./NBPService";
import Mocks from "./test/mocks";

class WJSConverter {
  constructor(rateList) {
    this.NBPService = new NBPService();
    this.rateList = rateList;
    this.convertObject = Mocks.currenciesTable;
    this.dataLoaded = false;
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

  calculateValuesForTable(table) {
    const currencies = ['eur', 'usd', 'gbp', 'chf'];
    const rowPLN = table['pln'];
    console.log('🦑 rowPLN ', rowPLN);
        
    currencies.forEach((currency) => {
      const pln = (1 / rowPLN[currency]).toFixed(2);
      table[currency] = {'pln': pln};
      currencies.forEach((subCurrency) => {
        if(subCurrency !== currency) {
          table[currency][subCurrency] = ( table['pln'][subCurrency] / table['pln'][currency] ).toFixed(2)
        }
      })
    });
    console.log('🦑 currencies ', currencies);
        
    return table;
  }

  async createConvertObject() {
    if(!this.dataLoaded) {
      const currencies = ['pln', 'eur', 'usd', 'gbp', 'chf'];
      const currenciesTable = {};
      currenciesTable['pln'] = {};
      for(let i=0; i < currencies.length; i++) {
        let currency = currencies[i];
        if (currency !== 'pln') {
          const currentRate = await this.NBPService.fetchCurrentRate(currency);
          currenciesTable['pln'][currency] = Number(currentRate).toFixed(2);
        }
      }
      this.convertObject = this.calculateValuesForTable(currenciesTable);
      this.dataLoaded = true;
    }
    return this.convertObject;
  }
}

export default WJSConverter;