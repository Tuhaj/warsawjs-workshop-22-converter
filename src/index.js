class WJSConverter {
  constructor(convertObject, rateList) {
    this.rateList = rateList;
    this.convertObject = convertObject;
  }

  convert(value, currencyFrom, currencyTo) {
    if(!value) return;
    currencyFrom = currencyFrom.toLowerCase();
    currencyTo = currencyTo.toLowerCase();

    if(currencyFrom !== currencyTo) {
      value *= this.convertObject[currencyTo][currencyFrom];
    }
    return value.toFixed(2);
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
}

