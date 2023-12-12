import { screen, render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { FilterCountries } from '../pages/FilterCountries';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filter-by-region" element={<FilterCountries />} />
    </Routes>
  );
};

describe('Router tests', () => {
  it('should render homepage', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const afghanistanCountry = screen.getByText(/Afghanistan/i);
    expect(afghanistanCountry).toBeInTheDocument();
  });

  it('should render FilterCountries component when navigating to /filter-by-region', () => {
    const filterByRegionRoute = '/filter-by-region';
    render(
      <MemoryRouter initialEntries={[filterByRegionRoute]}>
        <App />
      </MemoryRouter>
    );

    const filterCountriesHeading = screen.getByText(
      /Filter countries based on Region/i
    );
    expect(filterCountriesHeading).toBeInTheDocument();
  });
});
