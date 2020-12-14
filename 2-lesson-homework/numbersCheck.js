let a = 5;
let b = -8;

function positive(x) {

	if (x > 0) {
		result = true
	} else {
		result = false
	}
	return result;
}

switch (true) {
	case (positive(a) && positive(b)):
		console.log(Math.abs(a - b))
		break;
	case (!positive(a) && !positive(b)):
		console.log(a * b)
		break;
	case (positive(a) != positive(b)):
		console.log(a + b)
		break;
}
