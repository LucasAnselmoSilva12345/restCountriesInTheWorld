import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Card, CountriesCard } from './Countries/Card';

interface SearchProps {
  countries: CountriesCard[];
}

export function Search({ countries }: SearchProps) {
  const [search, setSearch] = useState<string>('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Input
        type="text"
        placeholder="Search countries..."
        value={search}
        onChange={handleSearch}
      />
      <Card countries={filteredCountries} />
      <div className="w-full h-[1px] mt-4 bg-primary opacity-70" />
    </>
  );
}
