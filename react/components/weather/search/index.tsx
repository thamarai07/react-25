import { ChangeEvent } from "react";

interface WeatherInterface {
  search: string | number;
  setSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

const Search = ({ search, setSearch, handleSearch }: WeatherInterface) => {
  return (
    <>
      <div className="weather__search">
        <input
          type="text"
          value={search}
          onChange={setSearch}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </>
  );
};

export default Search;
