import { useWeather } from "./context/weatherContext";
import { moon, rainCloud, sun, thunderStorm, wind } from "./ImageSVG";

export default function WeatherImage() {
  const { forecast } = useWeather();
  const isData = forecast.length > 0;

  return (
    <section
      className={` w-[100%] flex mt-[200px] max-h-[200px] max-w-[50rem] mx-auto md:mb-20 md:mt-[100px] transition-all duration-500 ${
        isData && "translate-y-[-20rem]"
      }`}
    >
      <div id="rainCloud" className=" w-[100%]  ">
        {thunderStorm}
      </div>

      <div id="sun" className=" w-[100%] translate-y-[-50px] scale-125">
        {sun}
      </div>

      <div className=" w-[100%] ">{wind}</div>
    </section>
  );
}
