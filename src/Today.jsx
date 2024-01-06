import { useWeather } from "./context/weatherContext";

export default function Today() {
  const { weather, dispatch } = useWeather();

  return (
    JSON.stringify(weather) !== "{}" && (
      <>
        <main
          className={`flex-col flex relative gap-3 items-center bg-blue-100 shadow-md  mx-auto my-5 p-8 rounded-lg transition-all duration-500 md:gap-10 md:p-10 w-[20rem] sm:w-[25rem] md:w-[30rem]`}
        >
          <h1 className=" text-3xl md:text-4xl">{weather.name}</h1>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=""
            className="scale-[2] md:scale-[3]"
          />
          <section className="text-center space-y-1">
            <h2 className="text-6xl font-bold md:text-7xl">
              {Math.round(weather.main.temp)}&#8457;
            </h2>
            <p className="font-semibold capitalize md:text-xl">
              {weather.weather[0].description}
            </p>
            <p className="font-semibold md:text-xl">
              Feels like {Math.round(weather.main.feels_like)}&#8457;
            </p>
          </section>

          <button
            onClick={() => dispatch({ type: "clear" })}
            className="absolute top-3 right-3 text-blue-800"
          >
            &#10005;
          </button>
          <button
            onClick={() => dispatch({ type: "showDetails" })}
            className="absolute top-3 left-3 scale-150 text-blue-800"
          >
            &#9432;
          </button>
        </main>
      </>
    )
  );
}
