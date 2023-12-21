// HomeScreen.js
import React from "react";
import Clock from "./Clock";

const HomeScreen = ({ cities, removeCity }) => (
  <div className="home-screen">
    {cities.map((cityKey) => (
      <div key={cityKey} className="home-screen-city">
        <Clock cityKey={cityKey} time="" />
        <button onClick={() => removeCity(cityKey)}>Remove</button>
      </div>
    ))}
  </div>
);

export default HomeScreen;
