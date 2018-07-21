import WJSConverter from '../converter';
import NBPService from '../NBPService';
import axios from 'axios';
import Mocks from './mocks';

jest.mock('axios');

test('Converter initializes properly', () => {
  const rateList = document.querySelector('section.rate ul');
  expect(new WJSConverter(rateList)).toBeInstanceOf(WJSConverter);
});

test('Use convert function', () => {
  const rateList = document.querySelector('section.rate ul');
  const Converter = new WJSConverter(rateList);
  expect(Converter.convert(100, 'eur', 'pln')).toBe('425.00');
  expect(Converter.convert(0, 'eur', 'pln')).toBe("0.00");
});

test('Fetches NBP rate for eur', async () => {
  const resp = Mocks.eurResponse;
  axios.get.mockResolvedValue(resp);
  const service = new NBPService();
  expect(await service.fetchCurrentRate('gbp')).toBe(4.22);
});

test('Creates converting object', async () => {
  const rateList = document.querySelector('section.rate ul');
  const Converter = new WJSConverter(rateList);
  expect(await Converter.createConvertObject()).toBe(Mocks.currenciesTable);
})
