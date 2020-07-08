function daysPassed(date) {
  var jsDate = new Date(date);

  var current = new Date(jsDate.getTime());
  var previous = new Date(jsDate.getFullYear(), 0, 1);

  return Math.ceil((current - previous + 1) / 86400000);
}

console.log(daysPassed("Jan 10, 2020"));
console.log(daysPassed("Jul 11, 2020"));
