function primeNumber(num) {
	let prime = true;
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			prime = false;
			break;
		}
	}
	return prime;
}

var max = 100
var num = 0

while (num <= max) {
	// I have tried this option "(num <= 1) ? ++num: num;" it does not work. Why? 
	(num == 0) ? ++num: num;
	(num == 1) ? ++num: num;

	(primeNumber(num)) ? console.log(num): num;

	num++
}
