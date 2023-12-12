import { render, screen } from '@testing-library/react';
import { FilterCountriesByRegion } from '../components/FilterCountriesByRegion';
import countriesData from '../lib/data.json';

describe('FilterCountriesByRegion component', () => {
  it('should render the component properly', () => {
    render(<FilterCountriesByRegion countries={countriesData} />);
    const selectElement = screen.getByText('Select Region');
    expect(selectElement).toBeInTheDocument();
  });
});
