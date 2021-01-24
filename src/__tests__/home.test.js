import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Home from '../components/home';

describe('Home Tests', () => {
  it('', () => {
    render(<Home />);
    expect(
      screen.getByText('Welcome', { exact: false }),
    ).toHaveTextContent('Welcome to our page!');
  });

  it('Matchs component with snapshot', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
