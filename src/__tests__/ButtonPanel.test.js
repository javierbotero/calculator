import React from 'react';
import renderer from 'react-test-renderer';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonPanel from '../components/ButtonPanel';

describe('Test ButtonPanel', () => {
  const handleClick = jest.fn();
  it('Expect the handler function calls one time', () => {
    render(<ButtonPanel myHandler={handleClick} />);
    fireEvent.click(screen.getByText('0'));
    expect(handleClick.mock.calls.length).toBe(1);
  });

  it('Expect the document has 19 divs with any content string different that a blank space', async () => {
    render(<ButtonPanel myHandler={handleClick} />);
    const divs = await screen.findAllByText(/\S/)
      .then(data => data)
      .catch(error => error);

    expect(divs.length).toBe(19);
  });

  it('Match the component with the snapshot', () => {
    const tree = renderer
      .create(<ButtonPanel myHandler={handleClick} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
