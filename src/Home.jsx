// Home.jsx
import React, { useState } from "react";
import Clock from "./Clock";
import TimeZoneSelector from "./TimeZoneSelector";

export default function Home() {
  const [selectedTimeZone, setSelectedTimeZone] = useState("");

  return (
    <div>
      <h1 className="text-2xl text-center m-8 font-semibold">Home</h1>
      <main className="flex flex-col justify-center md:flex-row items-center space-x-0 md:space-x-4">
        <Clock cityKey={selectedTimeZone} />
      </main>
    </div>
  );
}
