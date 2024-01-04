import { useWeather } from "./context/weatherContext";
import Forecast from "./Forecast";
import Input from "./Input";
import Loader from "./Loader";
import Today from "./Today";
import WeatherImage from "./WeatherImage";

export default function AppLayout() {
  const { loading, forecast } = useWeather();

  const isData = forecast.length > 0;

  return (
    <main
      className={`w-100 bg-blue-50 min-h-[100dvh] flex flex-col items-center `}
    >
      <div
        className={`absolute w-[100%] transition-all duration-500 ${
          isData && "translate-y-[-20rem]"
        } sm:translate-y-[-22rem]`}
      >
        <WeatherImage />
        <Input />
      </div>

      <div
        className={`absolute bottom-[-100rem] transition-all duration-1000 ${
          isData && "translate-y-[-108rem]"
        }`}
      >
        <Today />
        <Forecast />
      </div>

      {loading && <Loader />}
    </main>
  );
}
