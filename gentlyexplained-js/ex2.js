let degrees = Number(prompt('Enter a number: '));

function convertToCelsius(degrees) {
  return (degrees - 32) * (5 / 9);
}

const convertedDegrees = convertToCelsius(degrees);
console.log(`${convertedDegrees}ºC`)