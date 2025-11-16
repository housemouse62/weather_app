const cardinalDirection = function (degrees) {
  let direction = "";
  console.log(degrees);
  if (degrees > 337.6 || degrees < 22.5) {
    direction = "North";
  }
  if (degrees > 22.6 && degrees < 67.5) {
    direction = "North East";
  }
  if (degrees > 67.6 && degrees < 112.5) {
    direction = "East";
  }
  if (degrees > 112.6 && degrees < 157.5) {
    direction = "South East";
  }
  if (degrees > 157.6 && degrees < 202.5) {
    direction = "South";
  }
  if (degrees > 202.6 && degrees < 247.5) {
    direction = "South West";
  }
  if (degrees > 247.6 && degrees < 292.5) {
    direction = "West";
  }
  if (degrees > 292.6 && degrees < 337.5) {
    direction = "North West";
  }
  return direction;
};

export { cardinalDirection };
