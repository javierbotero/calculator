import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const first = new Big(numberOne);
  const second = new Big(numberTwo);
  switch (operation) {
    case '/':
      return first.div(second);
    case 'x':
      return first.times(second);
    case '+':
      return first.plus(second);
    case '-':
      return first.minus(second);
    case '%':
      return first.times(second) / 100;
    default:
      return 0;
  }
}
