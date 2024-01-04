import AppLayout from "./AppLayout";
import { WeatherContext } from "./context/weatherContext";

function App() {
  return (
    <WeatherContext>
      <AppLayout />
    </WeatherContext>
  );
}

export default App;
