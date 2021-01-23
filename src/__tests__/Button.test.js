import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

describe('Testing Button', () => {
  const handler = jest.fn();
  it('Checks the handler function is called once', () => {
    render(<Button name="AC" myHandler={handler} myClass="class" color="orange" wide="false" />);
    fireEvent.click(screen.getByText('AC'));
    expect(handler.mock.calls.length).toBe(1);
  });

  it('Makes sure when prop wide has the string value "true" the inline style has the value "flex-basis: 50%"', () => {
    render(<Button name="0" myHandler={handler} myClass="class" color="orange" wide="true" />);
    const button = screen.getByText('0');
    expect(button).toHaveAttribute('style', expect.stringContaining('flex-basis: 50%'));
  });

  it('Checks that button has class "orange" when prop color is equal to "orange"', () => {
    render(<Button name="x" myHandler={handler} myClass="class" color="orange" wide="true" />);
    const button = screen.getByText('x');
    expect(button).toHaveClass('orange');
  });

  it('Make sure the render is the same with the snapshot', () => {
    const tree = renderer
      .create(<Button name="AC" myHandler={handler} myClass="class" color="orange" wide="false" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
