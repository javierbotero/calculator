import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Display from '../components/Display';

describe('Tests Display', () => {
  it('Makes sure display has the text "100 / 5" when the prop result has the object with that corresponding values', () => {
    const object = {
      total: '100',
      next: '5',
      operation: '/',
    };
    render(<Display result={object} />);
    const div = screen.getByText('100', { exact: false });
    expect(div).toHaveTextContent('100 / 5');
  });

  it('Prints 0 when total has null value', () => {
    const object = {
      total: null,
      next: null,
      operation: null,
    };

    render(<Display result={object} />);
    expect(screen.getByText('0')).toHaveTextContent('0');
  });

  it('Checks the component match with th snapshot', () => {
    const object = {
      total: null,
      next: null,
      operation: null,
    };
    const tree = renderer
      .create(<Display result={object} />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
});
