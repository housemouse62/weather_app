import sun from "./icons/animated/day.svg";
import partly_cloudy from "./icons/animated/cloudy-day-3.svg";
import partly_rainy from "./icons/animated/rainy-1.svg";
import snowsuncloud from "./icons/animated/snowy-3.svg";
import snowcast from "./icons/animated/snowy-6.svg";
import cloudy from "./icons/animated/cloudy.svg";
import rain from "./icons/animated/rainy-6.svg";
export const getIcon = function (conditions) {
  if (conditions === "Clear") {
    return sun;
  }
  if (conditions === "Partially cloudy") {
    return partly_cloudy;
  }
  if (conditions === "Rain, Partially cloudy") {
    return partly_rainy;
  }
  if (conditions === "Snow, Rain, Overcast") {
    return snowcast;
  }
  if (conditions === "Snow, Rain, Partially cloudy") {
    return snowsuncloud;
  }
  if (conditions === "Overcast") {
    return cloudy;
  }
  if (conditions === "Rain, Overcast") {
    return rain;
  }
  if (conditions.toLowerCase().includes("snow")) {
    return snowcast;
  }

  return sun;
};
