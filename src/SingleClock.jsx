import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import moment from "moment-timezone";
import { getAllTimezones } from "countries-and-timezones";

export default function SingleClock() {
  const [time, setTime] = useState("");
  const { timeZone } = useParams();
  const location = useLocation();
  const { cityData } = location.state || {};
  const { city, selectedTimeZone } = cityData || {};
  const { country } = selectedTimeZone || {};

  const allTimezones = getAllTimezones();

  useEffect(() => {
    let isMounted = true; // Add this flag

    const intervalId = setInterval(() => {
      const date = new Date();
      const formattedTime = moment(date).tz(timeZone).format("HH:mm:ss");

      if (isMounted) {
        setTime(formattedTime);
      }
    }, 1000);

    return () => {
      isMounted = false; // Set the flag to false on unmount
      clearInterval(intervalId);
    };
  }, [timeZone, allTimezones]);

  return (
    <main className="md:flex justify-center mt-10 items-start">
      <div className="flex flex-col items-start md:flex-col justify-between md:items-center p-6 bg-slate-200 rounded-md mb-4 w-fit h-fit md:w-96 md:h-64">
        <div className="md:text-4xl text-gray-600 text-xl">{city}</div>
        <div className="md:text-xl text-sky-600 text-sm">{country}</div>
        <div className="md:text-7xl text-gray-900 font-semibold font-mono text-5xl">
          {time}
        </div>
      </div>
    </main>
  );
}
