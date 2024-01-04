import { useWeather } from "./context/weatherContext";

export default function Today() {
  const { weather, forecast, dispatch } = useWeather();

  const isData = forecast.length > 0;

  return (
    JSON.stringify(weather) !== "{}" && (
      <>
        <main
          className={`flex-col relative gap-3 items-center bg-blue-100 w-80 mx-auto my-5 p-8 rounded-lg transition-all duration-500 ${
            isData ? "flex" : "hidden"
          }`}
        >
          <h1 className=" text-3xl">{weather.name}</h1>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=""
            className="scale-[2]"
          />
          <h2 className="text-6xl font-bold">
            {Math.round(weather.main.temp)}&#8457;
          </h2>
          <h4 className="font-semibold">
            Feels like {Math.round(weather.main.feels_like)}&#8457;
          </h4>
          <button
            onClick={() => dispatch({ type: "clear" })}
            className="absolute top-3 right-3"
          >
            &#10005;
          </button>
        </main>
      </>
    )
  );
}
