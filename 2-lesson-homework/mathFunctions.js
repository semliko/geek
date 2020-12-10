function add(a, b) {
	result = a + b;
	return result;
}

function deduct(a, b) {
	result = a - b;
	return result;
}

function multiply(a, b) {
	rusult = a * b;
	return result;
}

function divide(a, b) {
	result a / b;
	return result;
}

function mathOperation(arg1, arg2, operation) {

	switch (operation) {
		case ('add'):
			return add(arg1, arg2);
		case ('deduct'):
			return deduct(arg1, arg2);
		case ('multiply'):
			return multiply(arg1, arg2);
		case ('divide'):
			return divide(arg1, arg2);
	}
}
