function checkWeekend(date) {
  var jsDate = new Date(date);

  if (jsDate.getDay() == 6 || jsDate.getDay() == 0) {
    return "weekend";
  } else {
    return "not a weekend";
  }
}

console.log(checkWeekend("Jul 8, 2020"));
console.log(checkWeekend("Jul 11, 2020"));
