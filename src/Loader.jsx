import { useWeather } from "./context/weatherContext";

export default function Loader() {
  const { loadingText } = useWeather();

  return (
    <div className="absolute left-0 top-0 w-[100%] h-[100dvh] bg-stone-700/20 backdrop-blur-sm flex justify-center items-center">
      <section className="flex flex-col items-center gap-2">
        <div className="loader"></div>
        <p className="text-xl">{loadingText}</p>
      </section>
    </div>
  );
}
