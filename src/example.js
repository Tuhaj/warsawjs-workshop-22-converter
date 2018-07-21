const examples = {
  greeting: (name) => {
    return `Hello ${name}!`;
  },
  fibbonacci: (nth) => {
    let before = 0;
    let current = 1;
    let temp = null;
    for (let i = 1; i < nth; i++) {
      temp = current;
      current = current + before;
      before = temp;
    }
    return current;
  },
  toCurrencyFormat: (number) => {
    let base, reminder, indicator;
    [base, reminder] = number.toString().split('.');
    indicator = reminder[2];
    reminder = reminder.substring(0, 2);
    if(Number(indicator) > 4) {
      reminder = String(Number(reminder) + 1);
    }
    return [base, reminder].join('.');
  }
};

module.exports = examples;