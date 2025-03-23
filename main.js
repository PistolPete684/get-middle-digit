function gimme (triplet) {
  //Sort the array in ascending order & by way, the middle digit
 let sorted = [...triplet].sort((a, b) => a - b);
  //Find the index of the middle digit within the original array
  return triplet.indexOf(sorted[1]);
}