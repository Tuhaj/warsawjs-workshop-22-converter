import axios from 'axios';

class NBPService {

  constructor() {
    this.url = 'http://api.nbp.pl/api/exchangerates/rates/a/';
  }

  async fetchCurrentRate(currency) {
    const currencyInfoSource = `${this.url}${currency}/last/?format=json`;
    const response = await axios.get(currencyInfoSource).then(response => {
      return response.rates[0].mid;
    }).catch(error => error);
    return response;
  }
}

export default NBPService;