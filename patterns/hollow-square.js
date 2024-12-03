// Size of the square (rows and columns)
let size = 6;

// Outer loop for rows
for (let i = 1; i <= size; i++) {
  let row = ""; // Initialize a row

  // Inner loop for columns
  for (let j = 1; j <= size; j++) {
    // Print '*' for the border and spaces for the inside
    if (i === 1 || i === size || j === 1 || j === size) {
      row += "*";
    } else {
      row += " ";
    }
  }

  console.log(row); // Print the row
}
