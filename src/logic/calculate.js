import operate from './operate';

export default function calculate(data, buttonName) {
  let result = data;
  if ((result.total === null || result.computed || result.total === '0') && !['+', '-', 'x', '/', '%', '=', 'AC', '+/-'].includes(buttonName) && result.operation === null) {
    result.total = buttonName;
    result.computed = false;
    result.operation = null;
  } else if (result.operation === null && !['+', '-', 'x', '/', '%', '=', 'AC', '+/-'].includes(buttonName) && !result.computed) {
    result.total += buttonName;
  } else if (result.total && result.operation && result.operation !== '-' && buttonName === '-' && result.next === null) {
    result.next = buttonName;
  } else if (result.total && ['+', '-', 'x', '/', '%'].includes(buttonName) && result.next === null) {
    result.operation = buttonName;
  } else if (result.total && result.operation && !['+', 'x', '/', '%', '=', 'AC', '+/-', '/'].includes(buttonName) && result.next === null) {
    result.next = buttonName;
  } else if (result.total && result.operation && result.next && !['+', '-', 'x', '/', '%', '=', 'AC', '+/-'].includes(buttonName)) {
    result.next += buttonName;
  } else if (buttonName === '+/-') {
    if (result.total) { result.total *= -1; }
    if (result.next) { result.next *= -1; }
  } else if (['+', '-', 'x', '/', '%', '='].includes(buttonName) && result.total && result.next && result.operation) {
    result.total = operate(result.total, result.next, result.operation).toString();
    result.next = null;
    if (buttonName !== '=') {
      result.operation = buttonName;
    } else {
      result.operation = null;
    }
    if (!result.computed) { result.computed = true; }
  } else if (buttonName === 'AC') {
    result = {
      total: null,
      next: null,
      operation: null,
      computed: true,
    };
  }
  return { ...result };
}
