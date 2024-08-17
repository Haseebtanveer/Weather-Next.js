import React from "react";
import WeatherCard from "@/components/WeatherCard";

interface MainScreenProps {
  temperature: number | null;
  currentDate: string | null;
  location: string | null;
  weatherCondition: string | null;
  country: string | null;
  weatherIcon: string | null;
  windSpeed: number | null;
  humidity: number | null;
  weatherData: any;
}
const MainScreen: React.FC<MainScreenProps> = ({
  weatherData,
  weatherIcon,
  temperature,
  currentDate,
  weatherCondition,
  humidity,
  windSpeed,
  location,
  country,
}) => {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-5 pt-4 ">
        <section>
          <div>
            <WeatherCard
              weatherData={weatherData}
              weatherIcon={weatherIcon}
              temperature={temperature}
              currentDate={currentDate}
              weatherCondition={weatherCondition}
              humidity={humidity}
              windSpeed={windSpeed}
              location={location}
              country={country}
            />
          </div>
          <div></div>
        </section>
      </main>
    </div>
  );
};
export default MainScreen; 
