let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = "250000";

console.log(globalBasePrice);

var car1Update = parseInt(car1.basePrice) + parseInt(globalBasePrice);
var car2Update = parseInt(car2.basePrice) + parseInt(globalBasePrice);

console.log(car1Update);
console.log(car2Update);