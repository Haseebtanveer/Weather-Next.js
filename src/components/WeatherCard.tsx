import React from "react";
import { PiMapPinSimpleArea } from "react-icons/pi";
import { WiDayWindy, WiNightAltSleetStorm, WiHumidity } from "react-icons/wi";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { getDayOrNightIcon,convertTemper } from "@/utils/convertTemper";
import WeatherIcon from "../components/WeatherIcon";

interface WeatherCardProps {
  temperature: number | null;
  currentDate: string | null;
  location: string | null;
  weatherCondition: string | null;
  weatherIcon: string | null;
  country: string | null;
  windSpeed: number | null;
  humidity: number | null;
  weatherData: any;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
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
    <section className="mt-5 flex h-full w-full flex-col items-center justify-between gap-14 rounded-xl border-2 border-rose-900 border-opacity-50 bg-teal-600 p-5 sm:h-72">
      <div className="flex w-full justify-between gap-10">
        <div>
          <h1 className="text-3xl text-slate-200 font-semibold">
            <PiMapPinSimpleArea /> {location},{country}
          </h1>
          <div className="font-light text-slate-200">
            {currentDate ? format(parseISO(currentDate), "EEEE") : ""}|
            {currentDate
              ? format(parseISO(currentDate), "dd-MMM-yyyy hh:mm a")
              : ""}
          </div>
        </div>

        <div className="flex flex-col items-end gap-1">
          <div className="text-end text-slate-200 capitalize">
            {weatherCondition}
          </div>
          <div className="text-5xl text-slate-200">{temperature}°C</div>
        </div>
      </div>

      <div className="flex w-full justify-between">
        <ul className="flex flex-col gap-2 text-xs">
          <li className="flex items-center gap-1">
            <WiNightAltSleetStorm className="text-orange-500 w-8 h-8" />
            <span className="text-slate-200 capitalize">
              Weather Condition : {weatherCondition}
            </span>
          </li>
          <li className="flex items-center gap-1">
            <WiHumidity className="text-amber-400 w-8 h-8" />
            <span className="text-slate-200">Humidity : {humidity}%</span>
          </li>
          <li className="flex items-center gap-1">
            <WiDayWindy className="text-rose-400 w-8 h-8" />
            <span className="text-slate-200">Wind : {windSpeed} km/h</span>
          </li>
        </ul>

        <Image
          src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
          alt="weather-icon"
          width={100}
          height={100}
          layout="container"
          className="h-20 w-20"
        />
      </div>

      <span className="flex flex-col rounded-xl text-slate-200 bg-teal-600 p-5">
        Weather Today History
      </span>
      <div className="flex h-full w-full flex-col gap-14 rounded-xl border-opacity-50 bg-teal-600 p-5">
        <div className="relative w-full flex justify-center">
          <div className="flex gap-4 sm:gap-8 md:gap-10 lg:gap-16 overflow-x-auto justify-between pr-3 w-full sm:w-3/4 lg:w-11/12">
          {weatherData?.list.map((d: any, i: any) => {
  console.log(d); // This will log the value of 'd' for each iteration

  return (
    <div
      key={i}
      className="flex flex-col justify-between gap-2 items-center text-xs sm:text-sm md:text-base font-semibold"
    >
      <p className="whitespace-nowrap text-slate-200">
        {format(parseISO(d.dt_txt), "h:mm a")}
      </p>
      <WeatherIcon
        iconName={getDayOrNightIcon(d.weather[0].icon, d.dt_txt)}
      />
      <p className="text-slate-200">{convertTemper(d?.main?.temp)}°</p>
    </div>
  );
})}

          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherCard;
