function pyramid(rows) {
    for (let i = 1; i <= rows; i++) {
      let row = '';  
      // Create spaces before stars
      for (let j = 0; j < rows - i; j++) {
        row += ' ';
      }  
      // Create stars
      for (let k = 0; k < (2 * i - 1); k++) {
        row += '*';
      }  
      // Print the row
      console.log(row);
    }
  }
  
  pyramid(5);
  