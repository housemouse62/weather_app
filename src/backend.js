import { displayCurrentDay } from "./display";
import { displayNext7days } from "./display";

class CurrentWeatherInfo {
  constructor(
    date,
    location,
    conditions,
    temperature,
    feelsLike,
    windSpeed,
    windDirection,
    id = crypto.randomUUID(),
  ) {
    this.id = id;
    this.date = date;
    this.location = location;
    this.conditions = conditions;
    this.temperature = temperature;
    this.feelsLike = feelsLike;
    this.windSpeed = windSpeed;
    this.windDirection = windDirection;
  }
}

const getWeatherData = async function (city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=us&include=current%2Cdays%2Calerts&key=6BK2S42N8HPBTNTP9BF66PX8Q&contentType=json`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const next7 = data.days.slice(0, 6);
    console.log(data);
    console.log(typeof data.days[0].datetime);
    const daycheck = new Date(data.days[0].datetime);
    let check = daycheck.getDay();
    console.log(check);

    console.log(next7);
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

async function showCurrentWeather(city) {
  const weather = await getWeatherData(city);
  const newArray = new CurrentWeatherInfo(
    weather.days[0].datetime,
    weather.address,
    weather.currentConditions.conditions,
    weather.currentConditions.temp,
    weather.currentConditions.feelslike,
    weather.currentConditions.windspeed,
    weather.currentConditions.winddir,
  );
  displayCurrentDay(newArray);
  return newArray;
}

async function next7days(city) {
  const daysWeather = await getWeatherData(city);
  const next7 = daysWeather.days.slice(0, 7);
  const sevenDayArray = [];
  console.log(daysWeather);
  console.log(next7);
  next7.forEach((day) => {
    const daysArray = new CurrentWeatherInfo(
      day.datetime,
      "",
      day.conditions,
      day.tempmax,
      day.feelslikemax,
      day.windspeed,
      day.winddir,
    );
    sevenDayArray.push(daysArray);
  });
  console.log(sevenDayArray);
  displayNext7days(sevenDayArray);
}

const currentCity = showCurrentWeather("valencia, spain");
next7days("valencia, spain");
console.log(currentCity);
export { getWeatherData };
//export const currentWeather = new CurrentWeatherInfo();
export { showCurrentWeather };
export { next7days };
