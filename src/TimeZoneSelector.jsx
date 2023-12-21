import React, { useState } from "react";
import { getAllTimezones } from "countries-and-timezones";

const TimeZoneSelector = ({ onSelect, onCityChange }) => {
  const [selectedTimeZone, setSelectedTimeZone] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCityKey, setSelectedCityKey] = useState("unknown");

  const timeZones = Object.values(getAllTimezones()).map((tz) => tz.name);

  const handleTimeZoneChange = (event) => {
    const newSelectedTimeZone = event.target.value;
    const city = newSelectedTimeZone.split("/").pop() || "Unknown City";

    setSelectedTimeZone(newSelectedTimeZone);
    setSelectedCity(city);
    setSelectedCityKey("unknown");

    onSelect(newSelectedTimeZone);
    onCityChange(city);
  };

  return (
    <div>
      <label>Select Time Zone: </label>
      <select value={selectedTimeZone} onChange={handleTimeZoneChange}>
        <option value="">Select a time zone</option>
        {timeZones.map((tz) => (
          <option key={tz} value={tz}>
            {tz}
          </option>
        ))}
      </select>
      <div>{selectedCity}</div>
    </div>
  );
};

export default TimeZoneSelector;
