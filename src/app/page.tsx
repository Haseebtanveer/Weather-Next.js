"use client";
import React, { useState, useEffect } from "react";
import Menubar from "@/components/Menubar";
import Search from "@/components/Search";
import useWeatherData from "@/hook/customeHook";
import { Suspense } from "react";
import Loading from "./loading";
import MainScreen from "@/components/MainScreen";
import CityCard from "@/components/CityCard";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";

export default function Home() {
  const {
    weatherData,
    currentDate,
    temperature,
    weatherCondition,
    humidity,
    windSpeed,
    location,
    country,
    weatherIcon,
    loading,
    error,
    setPlace,
    predefinedCities,
    saveToFavorites,
    getFavorites,
  } = useWeatherData();

  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleAddFavorite = () => {
    if (location) {
      saveToFavorites(location);
      setFavorites(getFavorites());
    }
  };

  const handleClearFavorites = () => {
    localStorage.removeItem("favorites");
    setFavorites([]);
  };

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Menubar />
      <Search
        value=""
        onChange={undefined}
        onSubmit={undefined}
        currentDate={currentDate}
      />

      <div className="container mx-auto p-4">
        <h3 className="text-center text-xl mt-4">Popular Cities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {predefinedCities.map((city) => (
            <CityCard key={city} city={city} onClick={() => setPlace(city)} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <button
          onClick={handleAddFavorite}
          className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-800 transition-all duration-300 mx-2 flex items-center"
        >
          <GrFavorite className="mr-2" />
          <span>Add to Favorites</span>
        </button>

        <button
          onClick={handleClearFavorites}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300 mx-2 flex items-center"
        >
          <AiOutlineDelete className="mr-2" />
          <span>Clear Favorites</span>
        </button>
      </div>

      <h3 className=" className='flex flex-col text-slate-200 bg-teal-600 p-5' text-center text-xl mt-4">
        Your Favorite Cities
      </h3>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {favorites.map((city) => (
            <CityCard key={city} city={city} onClick={() => setPlace(city)} />
          ))}
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        <MainScreen
          weatherData={weatherData}
          temperature={temperature}
          currentDate={currentDate}
          weatherCondition={weatherCondition}
          humidity={humidity}
          windSpeed={windSpeed}
          weatherIcon={weatherIcon}
          location={location}
          country={country}
        />
      </Suspense>
    </div>
  );
}
