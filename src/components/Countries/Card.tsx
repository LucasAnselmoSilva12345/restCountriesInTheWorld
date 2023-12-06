import countriesData from '../../lib/data.json';

interface CountriesCard {
  flags: {
    svg: string;
  };
  name: string;
  population: number;
  region: string;
  capital?: string;
}

export function Card() {
  const countries: CountriesCard[] = countriesData;
  return (
    <div>
      {countries.map((country, index) => (
        <div key={index}>
          <img src={country.flags.svg} alt={country.flags.svg + "'s flag"} />
          <h2>{country.name}</h2>
          <p>{country.population}</p>
          <p>{country.region}</p>
          <p>{country.capital}</p>
        </div>
      ))}
    </div>
  );
}
