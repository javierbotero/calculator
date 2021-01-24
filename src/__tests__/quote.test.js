import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Quote from '../components/quote';

describe('Quote Tests', () => {
  it('Makes sure the text "Mathematics is not about numbers" is added', () => {
    render(<Quote />);
    expect(screen.getByText('Mathematics is not about numbers', { exact: false }))
      .toBeTruthy();
  });

  it('Checks match with the snapshot', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
