var a = 7;

allNumbers = [...Array(16).keys()]

switch (a) {
	case 0:
		allNumbers.forEach(function(entry) {
			console.log(entry);
		});
		break;
	case 15:
		console.log(a);
		break;
	default:
		startingPoint = allNumbers.slice(allNumbers.indexOf(a));

		startingPoint.forEach(function(entry) {
			console.log(entry);
		});
}
