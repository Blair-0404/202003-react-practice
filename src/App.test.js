import React from 'react';
import { render } from '@testing-library/react';
import SamplePractice from './Practice/SamplePractice';

test('renders learn react link', () => {
  const { getByText } = render(<SamplePractice />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
