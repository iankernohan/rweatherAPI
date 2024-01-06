import { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { useWeather } from "./context/weatherContext";
import Error from "./Error";
import {
  getCoords,
  getForecast,
  getUserPosition,
  getWeather,
} from "./helpers/helpers";

export default function Input() {
  const [input, setInput] = useState("");

  const { dispatch, error } = useWeather();

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
        setInput("");
      } catch (err) {
        dispatch({ type: "cancelLoading" });
        dispatch({ type: "error", payload: err.message });
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
        dispatch({ type: "error", payload: "Could not get current location" });
      }
    } else {
      dispatch({
        type: error,
        payload: "Your browser does not suppost Geolocation",
      });
    }
  }

  return (
    <section
      className={`mx-auto mb-8 mt-4 pt-5 flex gap-4 flex-col w-[80%] sm:w-[25rem] sm:pt-6 justify-center transition-all duration-500 `}
    >
      <form onSubmit={hanldeSearch} className="flex relative">
        <input
          type="text"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Location"
          className="rounded-full border border-blue-100 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 grow sm:p-4 sm:text-md"
        />
        <button className="absolute top-4 right-4 scale-150 sm:right-6 sm:top-5 text-blue-600">
          <SlMagnifier />
        </button>
      </form>
      {error && <Error error={error} input={input} />}
      <button
        className="bg-blue-500 text-blue-50 shadow-lg rounded-full py-2 px-3 hover:bg-blue-600 hover:shadow-none focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-1 w-fit self-center"
        onClick={handleUseCurLoc}
      >
        Use Current Location
      </button>
    </section>
  );
}
