import { useState } from "react";
import { useWeather } from "./context/weatherContext";
import {
  getCoords,
  getForecast,
  getUserPosition,
  getWeather,
} from "./helpers/helpers";

export default function Input() {
  const [input, setInput] = useState("");

  const { dispatch, forecast } = useWeather();

  const isData = forecast.length > 0;

  async function hanldeSearch(e) {
    e.preventDefault();
    if (input) {
      try {
        dispatch({ type: "loading", payload: "Getting Coordinates" });
        const { lat, lon } = await getCoords(input);
        dispatch({ type: "loading", payload: "Getting Weather" });
        const weather = await getWeather(lat, lon);
        const forecast = await getForecast(lat, lon);
        dispatch({ type: "updateAllWeather", payload: { weather, forecast } });
      } catch (err) {
        dispatch({ type: "cancelLoading" });
        throw new Error(err);
      }
    }
  }

  async function handleUseCurLoc() {
    if (navigator.geolocation) {
      try {
        dispatch({
          type: "loading",
          payload: "Getting Coordinates of Currect Location",
        });
        const position = await getUserPosition();
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        dispatch({ type: "loading", payload: "Getting Weather" });
        const weather = await getWeather(lat, lon);
        const forecast = await getForecast(lat, lon);
        dispatch({ type: "updateAllWeather", payload: { weather, forecast } });
      } catch (err) {
        dispatch({ type: "cancelLoading" });
        throw new Error("Error getting user position: " + err);
      }
    } else {
      throw new Error("Your browser does not suppost Geolocation");
    }
  }

  return (
    <section
      className={`mx-auto mb-8 mt-4 pt-5 flex gap-4 flex-col w-[80%] sm:w-[25rem] sm:pt-6 justify-center transition-all duration-500 `}
    >
      <form onSubmit={hanldeSearch} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Location"
          className="rounded-full border border-blue-100 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 grow sm:p-4 sm:text-md"
        />
      </form>
      <button
        className="bg-blue-500 text-blue-50 rounded-full py-2 px-3 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-1 w-fit self-center"
        onClick={handleUseCurLoc}
      >
        Use Current Location
      </button>
    </section>
  );
}
