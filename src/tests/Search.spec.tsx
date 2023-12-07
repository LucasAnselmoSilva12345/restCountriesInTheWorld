import { Search } from '../components/Search';
import { render, screen, fireEvent } from '@testing-library/react';
import countriesData from '../lib/data.json';

describe('Search Component', () => {
  it('should render Search component', () => {
    render(<Search countries={countriesData} />);

    const inputElement = screen.getByPlaceholderText('Search countries...');
    expect(inputElement).toBeInTheDocument();
  });

  it('should render countries based on search input', () => {
    render(<Search countries={countriesData} />);

    const inputElement = screen.getByPlaceholderText('Search countries...');
    fireEvent.change(inputElement, { target: { value: 'canada' } });

    const canadaCountry = screen.getByText(/Canada/i);
    expect(canadaCountry).toBeInTheDocument();
  });
});
