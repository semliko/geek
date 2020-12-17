function objNumber(number) {
	strArr = ('' + number).split('');

	if (strArr.length > 3) {
		console.log('Given Number is too long');
	} else {
		return {
			hundreds: strArr[0],
			tens: strArr[1],
			units: strArr[2]
		};
	}
}


console.log(objNumber(345));
