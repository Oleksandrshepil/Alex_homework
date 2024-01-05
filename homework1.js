"use strickt"
let result1= 'number' + 3 +3;
console.log(result1); /*при додаванні до строки, цифри перетворює на строку і додає до строки
результат: number33 */

let result2 = null + 3;
console.log(result2); //нуль плюс три дорівнює три

let result3 = 5 && "qwerty";
console.log(result3); //повертається останнє обчислене значення, результат: qwerty

let result4 = +'40' + +'2' + "hillel";
console.log(result4); //результат: 42hillel

let result5 = '10' - 5 === 6; 
console.log(result5); /*Js завжди намагається привести все до числа,тому '10'-5=5,
результат: 5 не дорівнює 6 */

let result6 = true + false;
console.log(result6); //за замовчуванням true це 1, false це 0, результат: 1+0=1

let result7 = '4px' - 3; 
console.log(result7); //результат: NaN

let result8 = '4' - 3; //Js завжди намагається привести все до числа, результат: '4'-3=1
console.log(result8);

let result9 = '6' + 3 ** 0; //3**0 це 1 і сприймається як строка, шість це строка, результат: 61
console.log(result9);

let result10 = 12 / '6'; 
console.log(result10); /*Js завжди намагається привести все до числа,тому '6' це число,
результат 12/6=2 */

let result11 = '10' + (5 === 6); 
console.log(result11); /*'10' це строка, 5 === 6 це false яке при додаванні до строки перетворює
 на строку і додає до строки, результат: 10false */

 let result12 = null == ''; 
console.log(result12); //null це не пуста строка. результат: false

let result13 = 3 ** (9 / 3); 
console.log(result13); //три зводимо в третю ступінь, результат: 27

let result14 = !!'false' == !!'true'; 
console.log(result14); //результат: true

let result15 = 0 || '0' && 1; 
console.log(result15); //результат: 1

let result16 = (+null == false) < 1;
console.log(result16); //результат: false

let result17 = false && true || true;
console.log(result17); /*false && true повертає false, отже false || true повертає true,  
результат: true*/

let result18 = false && (false || true);
console.log(result18); /*false || true повертає true, отже false && true повертає false,
результат: false*/

let result19 = (+null == false) < 1 ** 5;
console.log(result19); //результат: false