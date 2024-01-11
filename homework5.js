"use strict";
const units = ["км", "год", "кг"]; 
const quantities = [10, 1, 1]; 

for (let i = 0; i < units.length; i++) {
    let result = "";
     switch (units[i]) {
        case "км":
            result = `${quantities[i]} км це ${quantities[i] * 1000} м.`;
            break;
        case "год":
            result = `${quantities[i]} год це ${quantities[i] * 60} хв.`;
            break;
        case "кг":
            result = `${quantities[i]} кг це ${quantities[i] * 1000} грм.`;
            break;
        default:
            result = "Невідома одиниця виміру.";
    }
    console.log(result);
}

