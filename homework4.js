"use strickt"
var prompt = require('prompt');
prompt.start();
prompt.get(['years'], function (err, result) {
    if (err) {
        console.error('Помилка вводу:', err);
        return;
    }
    var years = parseInt(result.years);
    if (!isNaN(years) && years >= 0) {
        var output;
        if (years === 0) {
            output = "0 років";
        } else if (years === 1) {
            output = "1 рік";
        } else if (years >= 2 && years <= 4) {
            output = years + " роки";
        } else {
            output = years + " років";
        }
        console.log("Ваш вік: " + output);
    } 
    else {
        console.log("Будь ласка, введіть додатнє число.");
    }
});