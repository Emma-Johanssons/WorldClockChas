import React, { useEffect, useState } from "react";
import TimeZoneSelector from "./TimeZoneSelector";
import { useNavigate } from "react-router-dom";

export default function Clock({ initialCityKey }) {
  const [time, setTime] = useState("");
  const [selectedTimeZone, setSelectedTimeZone] = useState("");
  const [cityKey, setCityKey] = useState(initialCityKey || "");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (selectedTimeZone) {
        const date = new Date();
        try {
          const formattedTime = new Intl.DateTimeFormat("en-US", {
            timeZone: selectedTimeZone,
            timeStyle: "medium",
          }).format(date);
          setTime(formattedTime);
        } catch (error) {
          console.error("Error formatting time:", error);
          setTime("Invalid time zone");
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [selectedTimeZone]);

  useEffect(() => {
    if (cityKey && selectedTimeZone) {
      const url = `/clock/${encodeURIComponent(cityKey)}/${encodeURIComponent(
        selectedTimeZone
      )}`;
      try {
        navigate(url);
      } catch (error) {
        console.error("Error navigating:", error);
      }
    }
  }, [cityKey, selectedTimeZone, navigate]);

  const handleTimeZoneSelect = (timeZone) => {
    setSelectedTimeZone(timeZone);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };
  const handleClick = () => {
    console.log("Handle Click triggered!");

    if (selectedTimeZone && selectedCity) {
      const url = `/single-clock/${encodeURIComponent(selectedTimeZone)}`;

      try {
        navigate(url, {
          state: { cityData: { city: selectedCity, selectedTimeZone } },
        });
      } catch (error) {
        console.error("Error navigating:", error);
      }
    } else {
      console.error("selectedCity or selectedTimeZone is not defined.");
    }
  };

  return (
    <div className="flex md:flex-col justify-between items-center md:items-start p-6 bg-slate-200 rounded-md w-full md:w-auto mb-4">
      <div className="text-3xl text-gray-900 font-semibold font-mono">
        {time}
      </div>
      <TimeZoneSelector
        onSelect={handleTimeZoneSelect}
        onCityChange={handleCityChange}
      />
      <div className="text-gray-600 underline hover:text-gray-400">
        <button onClick={handleClick}>Bigger</button>
      </div>
    </div>
  );
}
