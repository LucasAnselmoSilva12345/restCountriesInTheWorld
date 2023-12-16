import { FilterCountriesByRegion } from '../components/FilterCountriesByRegion';
import dataCountriesJSON from '../lib/data.json';

export function FilterCountries() {
  const countries = dataCountriesJSON;
  return (
    <section className="p-6 lg:px-16 text-center">
      <h2 className="text-xl font-medium text-primary text-center">
        Filter countries based on Region
      </h2>

      <div className="mt-6">
        <FilterCountriesByRegion countries={countries} />
      </div>
    </section>
  );
}
