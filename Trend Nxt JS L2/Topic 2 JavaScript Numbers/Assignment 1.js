function cToF(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fToC(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function tempConverter(temp, convertTo) {
  if (convertTo === "C") {
    return fToC(temp);
  } else if (convertTo === "F") {
    return cToF(temp);
  }
}

let tempinC = 60;
let tempinF = 45;

console.log(tempinC + " C is " + tempConverter(tempinC, "F") + " F");
console.log(tempinF + " F is " + tempConverter(tempinF, "C") + " C");
