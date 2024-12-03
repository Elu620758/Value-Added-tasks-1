// Number of rows for the triangle
let rows = 5;

// Outer loop for the number of rows
for (let i = 1; i <= rows; i++) {
  let spaces = ""; // Initialize spaces
  let stars = ""; // Initialize stars

  // Inner loop to add spaces
  for (let j = 1; j <= rows - i; j++) {
    spaces += " ";
  }

  // Inner loop to add stars
  for (let k = 1; k <= i; k++) {
    stars += "*";
  }

  // Combine spaces and stars, then print the row
  console.log(spaces + stars);
}
