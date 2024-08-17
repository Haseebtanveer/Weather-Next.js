import { useState, useEffect } from "react";
import axios from "axios";
import { convertTemper } from "../utils/convertTemper";
import { useAtom } from "jotai";
import { placeAtom } from "@/utils/atom";

const predefinedCities = ["Dubai", "New York", "London", "Tokyo", "Sydney"];

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const [weatherCondition, setWeatherCondition] = useState<string | null>(null);
  const [humidity, setHumidity] = useState<number | null>(null);
  const [windSpeed, setWindSpeed] = useState<number | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [weatherIcon, setWeatherIcon] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [place, setPlace] = useAtom(placeAtom);

  useEffect(() => {
    const fetchData = async (city: string) => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=36a5dc3083f5f3a9cc797d633ddefc1a`
        );

        const currentDate = data?.list[0]?.dt_txt ?? "";
        const tempInCelsius = convertTemper(data?.list[0]?.main.temp ?? 0);
        const weatherCondition = data?.list[0]?.weather[0]?.description ?? "";
        const humidity = data?.list[0]?.main?.humidity ?? null;
        const windSpeed = data?.list[0]?.wind?.speed ?? null;
        const location = data?.city?.name ?? null;
        const country = data?.city?.country ?? null;
        const weatherIcon = data?.list[0]?.weather[0]?.icon ?? "";

        setWeatherData(data);
        setCurrentDate(currentDate);
        setTemperature(tempInCelsius);
        setWeatherCondition(weatherCondition);
        setHumidity(humidity);
        setWindSpeed(windSpeed);
        setLocation(location);
        setCountry(country);
        setWeatherIcon(weatherIcon);
      } catch (error: any) {
        console.error("Error fetching data:", error);
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (place) {
      fetchData(place);
    } else {
      fetchData(predefinedCities[0]);
    }
  }, [place]);

  const saveToFavorites = (city: string) => {
    const timestamp = Date.now();
    let favoritesData = JSON.parse(localStorage.getItem("favorites") || "{}");

    if (!favoritesData.cities) {
      favoritesData = { cities: [], timestamp };
    }

    if (!favoritesData.cities.includes(city)) {
      favoritesData.cities.push(city);
      favoritesData.timestamp = timestamp;
      localStorage.setItem("favorites", JSON.stringify(favoritesData));
    }
  };

  const getFavorites = () => {
    const favoritesData = JSON.parse(localStorage.getItem("favorites") || "{}");

    if (favoritesData.timestamp) {
      const currentTime = Date.now();
      const fifteenMinutes = 15 * 60 * 1000;

      if (currentTime - favoritesData.timestamp > fifteenMinutes) {
        localStorage.removeItem("favorites");
        return [];
      } else {
        return favoritesData.cities || [];
      }
    }

    return [];
  };

  return {
    weatherData,
    currentDate,
    temperature,
    weatherCondition,
    humidity,
    location,
    country,
    weatherIcon,
    windSpeed,
    loading,
    predefinedCities,
    setPlace,
    error,
    saveToFavorites,
    getFavorites,
  };
};

export default useWeatherData;
