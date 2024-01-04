import { useWeather } from "./context/weatherContext";
import { formatTime } from "./helpers/helpers";

export default function WeatherDetails() {
  const { weather } = useWeather();

  return (
    <section>
      <p>Description: {weather.weather[0].description}</p>
      <p>High: {weather.main.temp_min}</p>
      <p>Low: {weather.main.temp_max}</p>
      <p>Air pressure: {weather.main.pressure} hPa</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Visibility: {weather.visibility} m</p>
      <p>Clouds: {weather.clouds.all}%</p>
      <p>Wind speed: {weather.wind.speed}mph</p>
      <p>Wind deg: {weather.wind.deg}&deg;</p>
      <p>Sunrise: {formatTime(weather.sys.sunrise)}</p>
      <p>Sunset: {formatTime(weather.sys.sunset)}</p>
    </section>
  );
}
