import { useWeather } from "./context/weatherContext";

export default function Error({ error }) {
  const { dispatch } = useWeather();

  return (
    <div className="relative bg-blue-100/60 rounded-lg p-1">
      <p className="text-red-500 font-semibold text-center">
        {error || "An error occured"}
      </p>
      <button
        onClick={() => dispatch({ type: "error", payload: "-1" })}
        className="absolute right-2 top-1 text-blue-800"
      >
        &#10005;
      </button>
    </div>
  );
}
