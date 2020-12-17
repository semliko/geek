function ShoppingItem(name, price) {

	this.name = name;
	this.price = price;
};

let apple = new ShoppingItem('apple', 3);
let bread = new ShoppingItem('bread', 4);
let water = new ShoppingItem('water', 6);

basket = [apple, bread, water];

function calc(basket) {
	return basket.map(item => item.price).reduce((a, b) => a + b, 0);
}

console.log(calc(basket));
