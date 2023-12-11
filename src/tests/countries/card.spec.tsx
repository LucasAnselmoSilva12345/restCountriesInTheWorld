import { Card } from '../../components/Countries/Card';
import { screen, render } from '@testing-library/react';
import countriesData from '../../lib/data.json';

describe('Countries Card Component', () => {
  beforeEach(() => {
    render(<Card countries={countriesData} />);
  });

  it('should render countries card with unique informations from JSON file', async () => {
    countriesData.forEach((country) => {
      const flagCountryImage = screen.getByAltText(`${country.flag}'s flag`);
      const countryName = screen.getAllByText(country.name);
      const countryPopulation = screen.getAllByText(country.population);
      const countryRegion = screen.getAllByText(country.region);

      if (country.capital) {
        const countryCapital = screen.getAllByText(country.capital);
        expect(countryCapital[0]).toBeInTheDocument();
      }

      expect(flagCountryImage).toBeInTheDocument();
      expect(flagCountryImage).toHaveAttribute('src', country.flags.svg);
      expect(countryName[0]).toBeInTheDocument();
      expect(countryPopulation[0]).toBeInTheDocument();
      expect(countryRegion[0]).toBeInTheDocument();
    });
  });
});
