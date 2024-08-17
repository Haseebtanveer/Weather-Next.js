import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { format, parseISO } from "date-fns";
import Time from "../components/Time";
import axios from "axios";
//
import { loadingCityAtom, placeAtom } from "@/utils/atom";
import { useAtom } from "jotai";

interface Props {
  value: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  currentDate: string | null;
}

export default function Search(props: Props) {
  const [city, setCity] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [place, setPlace] = useAtom(placeAtom);
  const [_, setLoadingCity] = useAtom(loadingCityAtom);

  async function handleInputChange(value: string) {
    setCity(value);
    if (value.length >= 3) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=36a5dc3083f5f3a9cc797d633ddefc1a`
        );

        const suggestions = response.data.list.map((item: any) => item.name);
        setSuggestions(suggestions);
        setError(null);
        setShowSuggestions(true);
      } catch (error) {
        setSuggestions([]);
        setShowSuggestions(false);
        setError("Error fetching suggestions");
      }
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }

  function handleCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (postiion) => {
        const { latitude, longitude } = postiion.coords;
        try {
          setLoadingCity(true);
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=36a5dc3083f5f3a9cc797d633ddefc1a`
          );
          console.log("Geo Current location----", response.data.name);
          setTimeout(() => {
            setLoadingCity(false);
            setPlace(response.data.name);
          }, 500);
        } catch (error) {
          setLoadingCity(false);
        }
      });
    }
  }
  function handleSubmiSearch(e: React.FormEvent<HTMLFormElement>) {
    setLoadingCity(true);
    e.preventDefault();
    if (suggestions.length == 0) {
      setError("Location not found");
      setLoadingCity(false);
    } else {
      setError("");
      setTimeout(() => {
        setPlace(city);
        setLoadingCity(false);
        setShowSuggestions(false);
      }, 500);
    }
  }

  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center max-w-7xl px-4 md:px-20 mx-auto py-4">
      <section className="flex flex-col md:flex-row gap-2 items-center w-full md:w-auto">
        <span className="text-2xl md:text-3xl text-gray-400 hover:opacity-80 cursor-pointer">
          <IoLocationSharp onClick={handleCurrentLocation} />
        </span>
        <p className="text-slate-900/80 text-sm md:text-base">{place}</p>
        <p className="text-sm md:text-base">
          {props.currentDate ? format(parseISO(props.currentDate), "EEEE") : ""}
        </p>
        <p className="text-sm md:text-base">
          {props.currentDate
            ? format(parseISO(props.currentDate), "dd-MMM-yyyy")
            : ""}
        </p>
        |
        <p className="text-sm md:text-base">
          <Time />
        </p>
      </section>
      <div className="w-full md:w-auto mt-4 md:mt-0">
        <form
          onSubmit={handleSubmiSearch}
          className="flex relative items-center w-full"
        >
          <input
            type="text"
            value={city}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Search Location here"
            className="px-4 py-2 w-full md:w-[230px] border border-teal-600 rounded-l-md focus:outline-none focus:border-red-600"
          />
          <button className="px-3 py-3 bg-teal-600 text-white rounded-r-md focus:outline-none hover:bg-red-600">
            <BiSearchAlt2 />
          </button>
        </form>
        {showSuggestions && (
          <ul className="absolute z-10 w-full bg-white border border-gray-500 rounded-md mt-1">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => setCity(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
}
