import example from './example';

test('Function greeting greets properly', () => {
  expect(example.greeting('Piotr')).toBe('Hello Piotr!');
});

test('Function to curracy format gives fixed space', () => {
  expect(example.toCurrencyFormat(12.1234)).toBe('12.12');
  expect(example.toCurrencyFormat(12.799)).toBe('12.80');
});


test('Function fibbonacci gives proper numbers', () => {
  expect(example.fibbonacci(1)).toBe(1);
  expect(example.fibbonacci(2)).toBe(1);
  expect(example.fibbonacci(3)).toBe(2);
  expect(example.fibbonacci(4)).toBe(3);
  expect(example.fibbonacci(5)).toBe(5);
  expect(example.fibbonacci(6)).toBe(8);
  expect(example.fibbonacci(7)).toBe(13);
})

