import operate from './operate';

export default function calculate(data, buttonName) {
  let result = data;
  if (result.total === null && !['+', 'x', '÷', '%', '=', 'AC', '+/-'].includes(buttonName)) {
    result.total = buttonName;
  } else if (result.operation === null && !['+', '-', 'x', '÷', '%', '=', 'AC', '+/-'].includes(buttonName) && result.firstResult) {
    result.total += buttonName;
  } else if (result.total && result.operation && result.operation !== '-' && buttonName === '-' && result.next === null) {
    result.next = buttonName;
  } else if (result.total && ['+', '-', 'x', '÷', '%'].includes(buttonName) && result.next === null) {
    result.operation = buttonName;
  } else if (result.total && result.operation && !['+', 'x', '÷', '%', '=', 'AC', '+/-'].includes(buttonName) && result.next === null) {
    result.next = buttonName;
  } else if (result.total && result.operation && result.next && !['+', '-', 'x', '÷', '%', '=', 'AC', '+/-'].includes(buttonName)) {
    result.next += buttonName;
  } else if (buttonName === '+/-') {
    result.total *= -1;
    result.next *= -1;
  } else if (['+', '-', 'x', '÷', '%', '='].includes(buttonName) && result.total && result.next && result.operation) {
    result.total = operate(result.total, result.next, result.operation).toString();
    result.next = null;
    if (buttonName !== '=') {
      result.operation = buttonName;
    } else {
      result.operation = null;
    }
    if (result.firstResult) { result.firstResult = false; }
  } else if (buttonName === 'AC') {
    result = {
      total: null,
      next: null,
      operation: null,
      firstResult: true,
    };
  }
  return result;
}
