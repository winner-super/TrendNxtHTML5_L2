function removeDuplicates(arr) {
  return [...new Set(arr)];
}
var arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

console.log(arr, removeDuplicates(arr));
