const API_KEY = "fa4b2850f76ca3b40a4846e5ddbb58e7";

export function formatDay(time) {
  return new Date(time).getHours();
}

export function formatTime(time) {
  const date = new Date(time * 1000);
  let hour = date.getHours();
  let minute = date.getMinutes();
  let prefix = "a.m.";
  if (minute < 10) minute = "0" + minute;
  if (hour > 12) {
    hour -= 12;
    prefix = "p.m.";
  }
  return `${hour}:${minute} ${prefix}`;
}

export function getDay(date) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date(date).getDay();
  return weekday[day];
}

export async function getCoords(location) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`
    );
    const data = await res.json();
    const lat = data[0].lat;
    const lon = data[0].lon;
    return { lat, lon };
  } catch (err) {
    throw new Error(`Could not find location '${location}'`);
  }
}

export async function getWeather(latitude, longitude) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Could not get weather for '${location}'`);
  }
}

export async function getForecast(latitude, longitude) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`
    );
    const data = await res.json();
    return data.list;
  } catch (err) {
    throw new Error(`Could not get forecast for '${location}'`);
  }
}

export function getUserPosition() {
  return new Promise((success, error) =>
    navigator.geolocation.getCurrentPosition(success, error)
  );
}
