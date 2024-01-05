import { useWeather } from "./context/weatherContext";
import Input from "./Input";
import Loader from "./Loader";
import WeatherImage from "./WeatherImage";
import WeatherSection from "./WeatherSection";

export default function AppLayout() {
  const { loading, forecast } = useWeather();

  const isData = forecast.length > 0;

  return (
    <main
      className={`w-100 bg-blue-50 min-h-[100dvh] flex flex-col items-center`}
    >
      <div
        className={`absolute w-[100%] transition-all duration-500  ${
          isData && "translate-y-[-20rem] sm:translate-y-[-22rem]"
        } `}
      >
        <WeatherImage />
        <Input />
      </div>

      {isData && <WeatherSection />}

      {loading && <Loader />}
    </main>
  );
}
