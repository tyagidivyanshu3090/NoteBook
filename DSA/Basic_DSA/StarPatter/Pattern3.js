for (let i = 0; i < 4; i++) {
  let row = "";
  // The inner loop BUILDS the string
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}
