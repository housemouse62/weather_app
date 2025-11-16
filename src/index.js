import "./styles.css";
import { displayCurrentDay } from "./display";
import { getWeatherData } from "./backend";
import { searchBarDiv } from "./search";
const container = document.querySelector(".container");
container.classList.add("mainContainer");

const searchDiv = document.createElement("div");
searchDiv.classList.add("searchDiv");
const displayWeather = document.createElement("div");
displayWeather.classList.add("displayWeather");

container.append(searchDiv, displayWeather);

searchBarDiv(searchDiv);
