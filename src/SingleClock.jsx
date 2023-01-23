import { useEffect, useState } from "react";
import { timeZones } from "./TimeZones";
import { useParams } from "react-router";

export default function SingleClock() {
  const [time, setTime] = useState();
  const { cityKey } = useParams();
  const { city, timeZone, country } = timeZones[cityKey];

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("sv-SV"), { timeZone });
    }, 1000);
  }, []);

  return (
    <main className="md:flex justify-center mt-10 items-start">
      <div
        className="flex flex-col items-start md:flex-col justify-between md:items-center
   p-6 bg-slate-200 rounded-md mb-4 w-fit h-fit md:w-96 h-64"
      >
        <div className="md:text-4xl text-gray-600 text-xl">{city}</div>
        <div className="md:text-xl text-sky-600 text-sm">{country}</div>
        <div className=" md:text-7xl text-gray-900 font-semibold font-mono text-5xl">
          {time}
        </div>
      </div>
    </main>
  );
}
