// Number of rows and columns for the square
let size = 5;

// Outer loop for the rows
for (let i = 1; i <= size; i++) {
  let row = ""; // Initialize a row

  // Inner loop for the columns
  for (let j = 1; j <= size; j++) {
    row += "*";
  }

  console.log(row); // Print the row
}
