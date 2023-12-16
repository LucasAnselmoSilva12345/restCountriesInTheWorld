import { useState } from 'react';
import { Card, CountriesCard } from './Countries/Card';
import { RegionSelect } from './RegionSelect';

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
      <RegionSelect
        selectedRegion={selectedRegion}
        handleRegionChange={handleRegionChange}
      />

      {selectedRegion ? (
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Card countries={filteredCountries} />
        </div>
      ) : (
        <p className="text-destructive dark:text-red-700 text-center font-medium opacity-80 mt-4">
          No region searched
        </p>
      )}
    </div>
  );
}
