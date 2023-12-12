import { render, screen, fireEvent } from '@testing-library/react';

import { Home } from '../pages/Home';

describe('Search Component', () => {
  it('should render Search component', () => {
    render(<Home />);

    const inputElement = screen.getByPlaceholderText('Search countries...');
    expect(inputElement).toBeInTheDocument();
  });

  it('should render countries based on search input', () => {
    render(<Home />);

    const inputElement = screen.getByPlaceholderText('Search countries...');
    fireEvent.change(inputElement, { target: { value: 'canada' } });

    const canadaCountry = screen.getByText(/Canada/i);
    expect(canadaCountry).toBeInTheDocument();
  });
});
