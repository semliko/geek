let input = prompt("Please enter temperature in Fahrenheits ");

if (input != null) {
	celcius = parseInt(input);
	fahrenheits = (9 / 5) * celcius + 32;
	alert("In Fahrenheit it will be > " + fahrenheits);

}
