import { FilterCountriesByRegion } from '../components/FilterCountriesByRegion';
import dataCountriesJSON from '../lib/data.json';

export function FilterCountries() {
  const countries = dataCountriesJSON;
  return (
    <section>
      <h1>Filter countries based on Region</h1>
      <FilterCountriesByRegion countries={countries} />
    </section>
  );
}
