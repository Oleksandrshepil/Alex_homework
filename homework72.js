"use strickt"
function pad(str, char, count, isPadStart) {
    const currentLength = str.length;

    if (currentLength >= count) {
        return str;
    }

    const padding = char.repeat(count - currentLength);
    
    return isPadStart ? char + str : str + padding;
}

console.log(pad('qwerty', '+', 7, true));
console.log(pad('qwerty', '+', 10, false));
console.log(pad('qwerty', '+', 6, false));