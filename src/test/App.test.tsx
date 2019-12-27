import React from 'react';
import { render, cleanup } from '@testing-library/react'
import App from '../App';
import { unmountComponentAtNode } from "react-dom";

afterEach(cleanup)

describe('This will test MyComponent', () => {
  test('renders message', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello World!'));
  });
});
