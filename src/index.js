import WJSConverter from './converter';

const inputCurrency = document.querySelector('#input-currency');
const outputCurrency = document.querySelector('#output-currency');

const rateList = document.querySelector('section.rate ul');
const Converter = new WJSConverter(rateList);
const currentRateContainer = document.querySelector('#current-rate');

Converter.generateConvertTable(currentRateContainer, inputCurrency);

const input = document.querySelector('#input-value');
const resultContainer = document.querySelector('#result');

inputCurrency.addEventListener('change', () => {
  resultContainer.innerText = Converter.convert(input.value, inputCurrency.value, outputCurrency.value);
  Converter.generateConvertTable(currentRateContainer, inputCurrency);
});
outputCurrency.addEventListener('change', () => {
  resultContainer.innerText = Converter.convert(input.value, inputCurrency.value, outputCurrency.value);
  Converter.generateConvertTable(currentRateContainer, inputCurrency);
});
input.addEventListener('keyup', () => {
  resultContainer.innerText = Converter.convert(input.value, inputCurrency.value, outputCurrency.value);
});