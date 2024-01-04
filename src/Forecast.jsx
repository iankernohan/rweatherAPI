import { useWeather } from "./context/weatherContext";
import { formatTime, getDay } from "./helpers/helpers";

export default function Forecast() {
  const { forecast } = useWeather();

  return (
    <div className="flex bg-blue-100 rounded-lg overflow-auto w-80 mx-auto">
      {forecast.map((item) => (
        <section
          key={item.dt}
          className=" p-5 min-w-[125px] flex flex-col justify-between items-center"
        >
          <h4>{getDay(item.dt_txt)}</h4>
          <h5>{formatTime(item.dt)}</h5>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt=""
          />
          <h5>{Math.round(item.main.temp)}&#8457;</h5>
        </section>
      ))}
    </div>
  );
}
