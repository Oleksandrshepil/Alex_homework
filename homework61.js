"use strickt"

// Перший спосіб
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        console.log(symbol.repeat(i));
    }
}
console.log("drawTriangle(5,*)");
drawTriangle(5, '*');

// Другий спосіб
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}
console.log(`drawTriangle2(5,*)`);
drawTriangle(5, '*');