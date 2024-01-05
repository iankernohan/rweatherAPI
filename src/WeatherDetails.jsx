import { motion } from "framer-motion";
import { useWeather } from "./context/weatherContext";
import { formatTime } from "./helpers/helpers";

const variants = {
  open: { height: "100%" },
  closed: { height: "0px" },
};

export default function WeatherDetails() {
  const { weather, showDetails, dispatch } = useWeather();

  return (
    <motion.section
      transition={{ duration: 0.35 }}
      animate={showDetails ? "open" : "closed"}
      variants={variants}
      className={`overflow-hidden mx-auto bg-blue-100 rounded-lg shadow-md`}
    >
      <div className="p-8 relative  flex flex-col items-center lg:block">
        <h3 className="text-center text-xl font-bold mb-2 underline underline-offset-1">
          Details
        </h3>
        <div className="flex flex-col font-semibold lg:max-h-36 lg:flex-wrap lg:items-center">
          <div className="space-y-1 mb-1">
            <p>High: {Math.round(weather.main.temp_max)}&#8457;</p>
            <p>Low: {Math.round(weather.main.temp_min)}&#8457;</p>
            <p>Air pressure: {weather.main.pressure} hPa</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Visibility: {weather.visibility} m</p>
          </div>
          <div className="space-y-1">
            <p>Clouds: {weather.clouds.all}%</p>
            <p>Wind speed: {weather.wind.speed}mph</p>
            <p>Wind deg: {weather.wind.deg}&deg;</p>
            <p>Sunrise: {formatTime(weather.sys.sunrise)}</p>
            <p>Sunset: {formatTime(weather.sys.sunset)}</p>
          </div>
        </div>
        <button
          onClick={() => dispatch({ type: "showDetails" })}
          className="absolute top-3 right-3"
        >
          &#10005;
        </button>
      </div>
    </motion.section>
  );
}
