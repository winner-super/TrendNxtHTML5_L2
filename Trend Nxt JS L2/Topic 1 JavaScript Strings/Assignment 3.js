function toggleCase(sentence) {
  return sentence
    .split("")
    .map((el) => {
      if (el.toLowerCase() === el) {
        return el.toUpperCase();
      } else {
        return el.toLowerCase();
      }
    })
    .join("");
}

let sentence =
  "They counTed them aNd were suRpriSed to fiNd that nOt one Lamb of tHe Great fLock of sEven huNdred waS miSsing";

console.log(toggleCase(sentence));
