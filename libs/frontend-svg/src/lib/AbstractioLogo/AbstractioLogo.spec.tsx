import { render } from '@testing-library/react';

import AbstractioLogo from './AbstractioLogo';

describe('AbstractioLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AbstractioLogo />);
    expect(baseElement).toBeTruthy();
  });
});
