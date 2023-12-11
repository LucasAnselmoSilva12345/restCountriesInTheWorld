import dataCountriesJSON from '../lib/data.json';
import { Card } from '../components/Countries/Card';
import { Search } from '@/components/Search';

export function Home() {
  const countries = dataCountriesJSON;
  return (
    <section>
      <Search countries={countries} />
      <Card countries={countries} />
    </section>
  );
}
