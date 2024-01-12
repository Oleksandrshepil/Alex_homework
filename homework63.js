"use strickt"
function pow(x, y) {
    let result = 1;

    for (let i = 0; i < y; i++) {
        result *= x;
    }

    return result;
}

// Приклад використання:
let base = 2;
let degree = 4;
let result = pow(base, degree);
console.log(`${base} ^ ${degree} = ${result}`);