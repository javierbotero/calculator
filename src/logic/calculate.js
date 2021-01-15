import operate from './operate';

export default function calculate(data, ButtonName) {
  let result = data;
  if (result.total === null && !['+', 'x', '÷', '%', '=', 'AC', '+/-'].includes(ButtonName)) {
    result.total = ButtonName;
  } else if (result.operation === null && !['+', '-', 'x', '÷', '%', '=', 'AC', '+/-'].includes(ButtonName) && result.firstResult) {
    result.total += ButtonName;
  } else if (result.total && result.operation && result.operation !== '-' && ButtonName === '-' && result.next === null) {
    result.next = ButtonName;
  } else if (result.total && ['+', '-', 'x', '÷', '%'].includes(ButtonName) && result.next === null) {
    result.operation = ButtonName;
  } else if (result.total && result.operation && !['+', 'x', '÷', '%', '=', 'AC', '+/-'].includes(ButtonName) && result.next === null) {
    result.next = ButtonName;
  } else if (result.total && result.operation && result.next && !['+', '-', 'x', '÷', '%', '=', 'AC', '+/-'].includes(ButtonName)) {
    result.next += ButtonName;
  } else if (ButtonName === '+/-') {
    result.total *= -1;
    result.next *= -1;
  } else if (['+', '-', 'x', '÷', '%', '='].includes(ButtonName) && result.total && result.next && result.operation) {
    result.total = operate(result.total, result.next, result.operation).toString();
    result.next = null;
    if (ButtonName !== '=') {
      result.operation = ButtonName;
    } else {
      result.operation = null;
    }
    if (result.firstResult) { result.firstResult = false; }
  } else if (ButtonName === 'AC') {
    result = {
      total: null,
      next: null,
      operation: null,
      firstResult: true,
    };
  }
  return result;
}
