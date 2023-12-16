interface RegionSelectProps {
  selectedRegion: string;
  handleRegionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function RegionSelect({
  selectedRegion,
  handleRegionChange,
}: RegionSelectProps) {
  return (
    <select
      className="w-3/5 p-1 text-sm bg-background border border-primary dark:text-foreground"
      value={selectedRegion}
      onChange={handleRegionChange}
    >
      <option value="">Select Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
