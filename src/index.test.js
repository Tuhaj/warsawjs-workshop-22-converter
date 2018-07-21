import WJSConverter from './converter';

test('Converter initializes properly', () => {
  const rateList = document.querySelector('section.rate ul');
  expect(new WJSConverter(rateList)).toBeInstanceOf(WJSConverter);
});

test('Use convert function', () => {
  const rateList = document.querySelector('section.rate ul');

  expect().toBeInstanceOf(WJSConverter);

});