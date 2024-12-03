// Number of rows for the triangle
let rows = 5;

// Outer loop for the number of rows
for (let i = rows; i >= 1; i--) {
  // Inner loop for the number of stars in each row
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars); // Print each row
}
