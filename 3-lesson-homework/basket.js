 basket = [{
 	"item-1": 100
 }, {
 	"item-2": 20
 }, {
 	"item-3": 40
 }];

 function calc(basket) {
 	prices = [];
 	for (var i in basket) {
 		let priceNum = parseFloat(Object.values(basket[i]));
 		prices.push(priceNum);
 	}
 	return prices.reduce((a, b) => a + b, 0);
 }


 console.log(calc(basket));
