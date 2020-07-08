function longestCommonStartingSubstring(input_arr) {
  let arr = input_arr.concat().sort(),
    a1 = arr[0],
    a2 = arr[arr.length - 1],
    L = a1.length,
    i = 0;
  while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
  return a1.substring(0, i);
}

console.log(longestCommonStartingSubstring(["face", "faceBook", "fade"]));
console.log(longestCommonStartingSubstring(["SawHouse", "Saw", "Sa"]));
