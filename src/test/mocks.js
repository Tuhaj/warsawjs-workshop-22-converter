const Mocks = {
  eurResponse: {'table':'A','currency':'euro','code':'EUR',
    'rates': [
      {'no':'140/A/NBP/2018','effectiveDate':'2018-07-20','mid': 4.22}
    ]
  },
  currenciesTable: {
    /*currencyTo: { currencyFrom: rate }*/
    'pln': { 'eur': 4.25, 'usd': 3.59, 'gbp': 4.62, 'chf': 3.69 },
    'eur': { 'pln': 0.23, 'usd': 0.84, 'gbp': 1.08, 'chf': 0.86 },
    'usd': { 'eur': 1.18, 'pln': 0.27, 'gbp': 1.28, 'chf': 1.03 },
    'gbp': { 'pln': 0.21, 'eur': 0.92, 'usd': 0.77, 'chf': 0.80 },
    'chf': { 'pln': 0.27, 'eur': 1.16, 'usd': 0.97, 'gbp': 1.25 }
  }
};

export default Mocks;