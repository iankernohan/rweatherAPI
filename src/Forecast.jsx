import { useWeather } from "./context/weatherContext";
import { formatTime, getDay } from "./helpers/helpers";

export default function Forecast() {
  const { forecast } = useWeather();

  return (
    <div className="flex bg-blue-100 shadow-md rounded-lg overflow-auto mx-auto my-5 w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[45rem] transition-all duration-200">
      {forecast.map((item) => (
        <section
          key={item.dt}
          className=" p-5 min-w-[125px] flex flex-col justify-between items-center"
        >
          <h4 className="font-semibold">{getDay(item.dt_txt)}</h4>
          <h5>{formatTime(item.dt)}</h5>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt=""
          />
          <h5 className="font-bold">{Math.round(item.main.temp)}&#8457;</h5>
        </section>
      ))}
    </div>
  );
}
