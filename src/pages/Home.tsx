import dataCountriesJSON from '../lib/data.json';
import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Card } from '../components/Countries/Card';

export function Home() {
  const countries = dataCountriesJSON;

  const [search, setSearch] = useState<string>('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-6 lg:px-16">
      <Input
        type="text"
        className="text-foreground"
        placeholder="Search countries..."
        value={search}
        onChange={handleSearch}
      />
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <Card countries={filteredCountries} />
      </div>
    </section>
  );
}
