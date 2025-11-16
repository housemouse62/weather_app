import { showCurrentWeather } from "./backend";
import { next7days } from "./backend";
import { cardinalDirection } from "./cardinalDirection";
import { getIcon } from "./getIcon";
import windIcon from "./icons/animated/Fangrey.gif";
import windStill from "./icons/animated/FanStill.png";
import "./display.css";

// change date to day of the week
const dayOfTheWeek = function (todayWeather) {
  const date = new Date(todayWeather.date);
  const dayNum = date.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = daysOfWeek[dayNum];
  return day;
};
const displayCurrentDay = function (todayWeather) {
  const container = document.querySelector(".displayWeather");
  container.innerHTML = "";
  const currentDiv = document.createElement("div");
  currentDiv.classList.add("currentDiv");

  const todayBG = document.createElement("div");
  todayBG.classList.add("todayBG");

  const todayCard = document.createElement("div");
  todayCard.classList.add("todayCard");

  // capitalize city first letter
  const lowercaseCity = todayWeather.location;
  function upperCaseCity(lowercaseCity) {
    if (!lowercaseCity) {
      return "";
    }
    return lowercaseCity.charAt(0).toUpperCase() + lowercaseCity.slice(1);
  }
  const currentLocation = upperCaseCity(lowercaseCity);

  // get the day
  const dayOfWeek = document.createElement("h3");
  dayOfWeek.innerHTML = "Currently";

  // location
  const location = document.createElement("h3");
  location.innerHTML = currentLocation;

  // icon
  const icon = document.createElement("img");
  icon.classList.add("icon");
  icon.src = getIcon(todayWeather.conditions);

  // temperature
  const currentTemp = document.createElement("p");
  currentTemp.classList.add("currentTemp");
  currentTemp.innerHTML = `${Math.round(todayWeather.temperature)} &deg;F`;

  // // feels like
  // const currentlyFeelsLike = document.createElement("p");
  // currentlyFeelsLike.innerHTML = `feels like: ${todayWeather.feelsLike} F`;

  // conditions
  const conditions = document.createElement("p");
  conditions.classList.add("conditions");
  conditions.innerHTML = `It's ${todayWeather.conditions}`;

  //wind div
  const windDiv = document.createElement("div");
  windDiv.classList.add("windDiv");

  //wind icon
  const windy = document.createElement("img");
  windy.classList.add("windIcon");
  windy.src = windIcon;

  //wind info div
  const windInfo = document.createElement("div");
  windInfo.classList.add("windInfo");

  // wind
  const currentWindSpeed = document.createElement("p");
  currentWindSpeed.innerHTML = todayWeather.windSpeed + " mph";

  // wind direction
  const currentWindDirection = document.createElement("p");
  const wind = cardinalDirection(todayWeather.windDirection);
  currentWindDirection.innerHTML = wind;

  console.log(wind);
  container.append(currentDiv);
  currentDiv.append(todayBG);
  todayBG.append(todayCard);
  todayCard.append(
    location,
    // dayOfWeek,
    icon,
    currentTemp,
    conditions,
    windDiv,
  );
  windDiv.append(windy, windInfo);
  windInfo.append(currentWindSpeed, currentWindDirection);
};

const displayNext7days = function (next7) {
  const container = document.querySelector(".displayWeather");
  const sevenDayDiv = document.createElement("div");
  sevenDayDiv.classList.add("sevenDayDiv");
  container.append(sevenDayDiv);

  next7.forEach((item, index) => {
    // day's card div
    const dayCard = document.createElement("div");
    dayCard.classList.add("dayCard");

    //day of the week
    const dayText = index === 0 ? "Today" : dayOfTheWeek(item);
    const dayOfWeek = document.createElement("h3");
    dayOfWeek.innerHTML = dayText;

    // icon
    const icon = document.createElement("img");
    icon.classList.add("icon_small");
    icon.src = getIcon(item.conditions);

    // daily conditions
    const dayCondition = document.createElement("p");
    dayCondition.classList.add("dayCondition");
    dayCondition.innerHTML = item.conditions;

    // max temp
    const maxTemp = document.createElement("p");
    maxTemp.classList.add("maxTemp");
    maxTemp.innerHTML = Math.round(item.temperature) + " &deg;F";

    //wind div
    const windDiv = document.createElement("div");
    windDiv.classList.add("windDiv");

    //wind icon
    const windy = document.createElement("img");
    windy.classList.add("windIconSmall");
    windy.src = windStill;

    //wind info div
    const windInfo = document.createElement("div");
    windInfo.classList.add("windInfo");

    // wind speed
    const windSpeed = document.createElement("p");
    windSpeed.classList.add("windSpeed");
    windSpeed.innerHTML = item.windSpeed + " mph";

    // wind direction
    const windDirection = document.createElement("p");
    windDirection.classList.add("windDirection");
    const wind = cardinalDirection(item.windDirection);
    windDirection.innerHTML = wind;

    console.log(item);
    sevenDayDiv.append(dayCard);
    dayCard.append(dayText, icon, maxTemp, dayCondition, windDiv);
    windDiv.append(windy, windInfo);
    windInfo.append(windSpeed, windDirection);
  });
};
export { displayCurrentDay };
export { displayNext7days };
