function typeOfFunct(a) {
  return typeof a;
}

console.log(typeOfFunct(() => {}));
console.log(typeOfFunct("Hello"));
console.log(typeOfFunct({}));
console.log(typeOfFunct(30));
