"use client";
import Search from "@/components/weather/search";
import Weather from "@/components/weather/weather";
import "../../src/scss/style.scss";
import { useState } from "react";

export default function WeatherProtcosting() {
  const [search, setSearch] = useState<string | number>("");
  const [Data,setData] = useState();

  const handleSearch = () => {
    FetchWeatherData();
  };

  // Function to fetch weather data
  async function FetchWeatherData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?q=${search}&appid=08b648e542e3aec6ad57d817fdf0af63`
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(Data)

  return (
    <>
      <Search
        search={search}
        setSearch={(event) => {
          // Set the input value as a string
          setSearch(event.target.value);
        }}
        handleSearch={handleSearch}
      />

      <Weather data={Data} />
    </>
  );
}
