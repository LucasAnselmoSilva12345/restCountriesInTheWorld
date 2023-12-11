export interface CountriesCard {
  flags: {
    svg: string;
  };
  name: string;
  population: number;
  region: string;
  capital?: string;
}

interface CardProps {
  countries: CountriesCard[];
}

export function Card({ countries }: CardProps) {
  return (
    <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {countries.map((country, index) => (
        <div key={index} className="bg-card dark:bg-white border border-border">
          <img
            className="w-full h-48 object-cover"
            src={country.flags.svg}
            alt={country.flags.svg + "'s flag"}
          />

          <div className="px-1 pt-4">
            <h2 className="text-2xl font-medium">{country.name}</h2>
            <p className="my-2 text-primary font-medium">
              Capital:{' '}
              <span className="text-neutral-950 font-normal">
                {country.capital}
              </span>
            </p>
          </div>
          <div className="p-2 flex items-center justify-between bg-primary text-right ">
            <p className="text-sm text-secondary font-medium">
              {country.population} citizens
            </p>
            <h6 className="text-xs text-secondary font-semibold">
              {country.region}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
}
