import { motion } from "framer-motion";
import { useWeather } from "./context/weatherContext";
import Today from "./Today";
import Forecast from "./Forecast";
import WeatherDetails from "./WeatherDetails";

export default function WeatherSection() {
  const { forecast } = useWeather();
  const isData = forecast.length > 0;

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={isData && { y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-[15rem] "
    >
      <Today />
      <WeatherDetails />
      <Forecast />
    </motion.div>
  );
}
