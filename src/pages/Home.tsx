import dataCountriesJSON from '../lib/data.json';
import { Search } from '../components/Search';
import { FilterCountriesByRegion } from '../components/FilterCountriesByRegion';

export function Home() {
  const countries = dataCountriesJSON;
  return (
    <section className="p-6 lg:px-16">
      <FilterCountriesByRegion countries={countries} />
      <Search countries={countries} />
    </section>
  );
}
