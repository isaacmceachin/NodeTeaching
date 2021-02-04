/*{
	18:19,
	19:20,
	20:21,
	21:22,
	22:23
}*/

//Currentlu numbers is blank with no properties on it
var numbers = {};

//Calling the for loop to start at 18, and continue incrementing until it's reached 22
for(var iii = 18; iii <= 22; iii++){
	//within the [] contains the name of a property being added to the numbers object
	numbers[iii] = (iii+1); //on the right side of the equals the values being stored to that property name
	
	//on the first iteration through the loop, iii is set to 18.
	//on numbers a property of 18 is declared.
	//the property of 18 on numbers is then set to the value (iii+1) -> 19.
	//on the next iteration, iii is set to 19, and that property name is stored on numbers as well.
}
console.log(numbers);

console.log("Test Change! 21");
