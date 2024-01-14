"use strickt"
var services = {
    "Стрижка": "60 грн",
    "Гоління": "80 грн",
    "Миття голови": "100 грн",
    'Розбити скло': "200 грн"
  };
  
  services.price = function() {
    let total = 0;
    for (var service in this) {
      if (typeof this[service] === 'string' && !isNaN(parseInt(this[service]))) {
        total += parseInt(this[service]);
      }
    }
    return total;
  };
  
  services.minPrice = function() {
    var min = Infinity;
    for (var service in this) {
      if (typeof this[service] === 'string' && !isNaN(parseInt(this[service]))) {
        min = Math.min(min, parseInt(this[service]));
      }
    }
    return min;
  };
  
  services.maxPrice = function() {
    var max = -Infinity;
    for (var service in this) {
      if (typeof this[service] === 'string' && !isNaN(parseInt(this[service]))) {
        max = Math.max(max, parseInt(this[service]));
      }
    }
    return max;
  };
  
  console.log("Загальна вартість послуг: " + services.price() + " грн");
  console.log("Мінімальна вартість послуги: " + services.minPrice() + " грн");
  console.log("Максимальна вартість послуги: " + services.maxPrice() + " грн");