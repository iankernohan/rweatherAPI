import { createContext, useContext, useReducer } from "react";

const initialState = {
  weather: {},
  forecast: [],
  loading: false,
  loadingText: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "updateAllWeather":
      return {
        ...state,
        weather: action.payload.weather,
        forecast: action.payload.forecast,
        loading: false,
        loadingText: "",
      };
    case "loading":
      return {
        ...state,
        loading: true,
        loadingText: action.payload,
      };
    case "cancelLoading":
      return {
        ...state,
        loading: false,
        loadingText: "",
      };
    case "clear":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

const Context = createContext();

export function WeatherContext({ children }) {
  const [{ weather, forecast, loading, loadingText }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <Context.Provider
      value={{ weather, forecast, loading, loadingText, dispatch }}
    >
      {children}
    </Context.Provider>
  );
}

export function useWeather() {
  const context = useContext(Context);
  if (!context) throw new Error("useWeather called outside of WeatherContext");
  return context;
}
