import { showCurrentWeather } from "./backend";
import { next7days } from "./backend";
import "./search.css";

//create the div for the search display area
const searchBarDiv = function (container) {
  const searchDisplay = document.createElement("div");
  searchDisplay.classList.add("searchDisplay");

  const searchLabel = document.createElement("label");
  searchLabel.setAttribute("for", "search");
  searchLabel.classList.add("searchLabel");

  const inputBG = document.createElement("div");
  inputBG.classList.add("inputBG");

  const searchInput = document.createElement("input");
  searchInput.classList.add("searchInput");
  searchInput.placeholder = "Enter a place...";
  searchInput.setAttribute("id", "searchInput");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("name", "taskName");

  // search button event

  const buttonBG = document.createElement("div");
  buttonBG.classList.add("buttonBG");
  const searchButton = document.createElement("button");
  searchButton.addEventListener("click", (event) => {
    const city = searchInput.value.trim();
    searchInput.value = "";
    showCurrentWeather(`${city}`);
    next7days(`${city}`);
  });
  searchButton.textContent = "Search";
  searchButton.classList.add("searchButton");

  // Search Input 'Enter key' event
  searchInput.addEventListener("keypress", (event) => {
    if (event.key == "Enter") searchButton.click();
  });

  container.append(searchDisplay);
  inputBG.append(searchInput);
  buttonBG.append(searchButton);
  searchDisplay.append(searchLabel, inputBG, buttonBG);
};

export { searchBarDiv };
