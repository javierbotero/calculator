import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  render, fireEvent, waitFor, screen, getByText
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';

describe('Testing App', () => {
  it('Shows text "Let\'s do some math!"', () => {
    render(<App />);
    expect(screen.getByText('Let\'s do some math!').innerHTML).toBe('Let\'s do some math!');
  });

  it('Press button one and display shows 1', () => {
    render(<App />);
    const one = screen.getByText('1');
    fireEvent.click(one);
    const display = document.querySelector('.display');
    expect(display).toHaveTextContent('1');
  });

  it('Makes an operation and displays the resul', () => {
    render(<App />);
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    const display = document.querySelector('.display');
    expect(display).toHaveTextContent('180');
  });
  
  it('Checks that display shows 0 if AC is pressed after some buttons are pressed', () => {
    render(<App />);
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('7'));
    const display = document.querySelector('.display');
    expect(display).toHaveTextContent('87');
    fireEvent.click(screen.getByText('AC'));
    expect(display).toHaveTextContent('0');
  });
});
