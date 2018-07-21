import WJSConverter from './converter';

test('Converter initializes properly', () => {
  const rateList = document.querySelector('section.rate ul');
  expect(new WJSConverter(rateList)).toBeInstanceOf(WJSConverter);
});

test('Use convert function', () => {
  const rateList = document.querySelector('section.rate ul');
  const Converter = new WJSConverter(rateList);
  expect(Converter.convert(100, 'eur', 'pln')).toBe("425.00");
  expect(Converter.convert(0, 'eur', 'pln')).toBe("0.00");

});