import { useState } from 'react';
import { Card, CountriesCard } from './Countries/Card';

interface FilterCountriesByRegionProps {
  countries: CountriesCard[];
}

export function FilterCountriesByRegion({
  countries,
}: FilterCountriesByRegionProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
  };

  const filteredCountries = selectedRegion
    ? countries.filter((country) => country.region === selectedRegion)
    : [];

  return (
    <div>
      <select id="regionSelect" onChange={handleRegionChange}>
        <option value="">Select Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      {selectedRegion ? (
        <Card countries={filteredCountries} />
      ) : (
        <p>No region searched</p>
      )}
    </div>
  );
}
