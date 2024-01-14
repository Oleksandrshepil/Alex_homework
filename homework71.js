"use strickt"
function customIsNaN(value) {
    return typeof value === 'number' && value !== value;
  }

  console.log(customIsNaN("abc"));
  console.log(customIsNaN("123"));
  console.log(customIsNaN(456));
  console.log(customIsNaN(NaN));
  console.log(customIsNaN(undefined));