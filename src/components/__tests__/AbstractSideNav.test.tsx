import { render } from '@testing-library/react';
import React from 'react';
import { Default as AbstractSideNav } from '../__stories__/AbstractSideNav.stories';

describe('AbstractSideNav', () => {
  it('renders without crashing', () => {
    render(<AbstractSideNav />);
  });
});
