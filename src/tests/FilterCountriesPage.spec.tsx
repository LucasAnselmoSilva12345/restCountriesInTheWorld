import { screen, render } from '@testing-library/react';
import { FilterCountries } from '../pages/FilterCountries';

describe('FilterCountries page', () => {
  it('should render the component properly', () => {
    render(<FilterCountries />);
    const filterCountriesHeading = screen.getByText(
      /Filter countries based on Region/i
    );
    expect(filterCountriesHeading).toBeInTheDocument();
  });
});
