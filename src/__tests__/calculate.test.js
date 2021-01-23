import calculate from '../logic/calculate';

describe('calculate tests', () => {
  it('Adds a number to total when everything is null', () => {
    const state = {
      total: null,
      next: null,
      operation: null,
    };

    const resultObject = calculate(state, '9');
    expect(resultObject.total).toBe('9');
  });

  it('adds to the end of the total property the inputted number', () => {
    const state = {
      total: '9',
      next: null,
      operation: null,
    };

    const resultObject = calculate(state, '0');
    expect(resultObject.total).toBe('90');
  });

  it('adds to operation property the string x when total exists', () => {
    const state = {
      total: '90',
      next: null,
      operation: null,
    };

    const resultObject = calculate(state, 'x');
    expect(resultObject.operation).toBe('x');
  });

  it('adds to next the value "2" when total and operation have values', () => {
    const state = {
      total: '90',
      next: null,
      operation: 'x',
    };

    const resultObject = calculate(state, '2');
    expect(resultObject.next).toBe('2');
  });

  it('adds to the end of the string property "next" the string "0" when total, operation and next have values', () => {
    const state = {
      total: '90',
      next: '2',
      operation: 'x',
    };

    const resultObject = calculate(state, '0');
    expect(resultObject.next).toBe('20');
  });

  it('Makes sure total has the result, operation ends with the input and other values are reset', () => {
    const state = {
      total: '90',
      next: '20',
      operation: 'x',
    };

    const resultObject = calculate(state, '-');
    expect(`${resultObject.total} ${resultObject.next === null ? 'null' : resultObject.next} ${resultObject.operation} ${resultObject.computed ? 'true' : 'false'}`)
      .toBe('1800 null - true');
  });

  it('Switch to negative values of total and next when "+/-" is inputted', () => {
    const state = {
      total: 200,
      next: 100,
      operation: '/',
    };

    const resultObject = calculate(state, '+/-');
    expect(`${resultObject.total} ${resultObject.operation} ${resultObject.next}`).toBe('-200 / -100');
  });
});
