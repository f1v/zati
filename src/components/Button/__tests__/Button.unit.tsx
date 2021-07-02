import * as React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../Button';

describe('Button.tsx', () => {
  test('renders content', () => {
    const { getByText } = render(<Button onClick={() => {}}>test</Button>);
    expect(getByText('test')).toBeInTheDocument();
  });
  describe('a11y', () => {
    test('uses the correct role', () => {
      const { getByRole } = render(<Button onClick={() => {}}>test</Button>);
      expect(getByRole('button')).toBeInTheDocument();
    });
  });
});
