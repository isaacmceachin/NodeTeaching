//Objects
var isaac = {
	name: "Isaac",
	age: 23,
	alive: true,
	weight: 166.8,
	race: "God",
};
//print out object named isaac
console.log(isaac);

//print out property value on isaac object named race
console.log(isaac.race);

//store function on new greet property on isaac object
isaac.greet = function(){
	//using the [this] global variable to reference the name property on the object holding the function
	console.log("Hello, " + this.name + "!");
};
//call greet function on isaac object
isaac.greet();

//print object isaac to console
console.log(isaac);

/*
	{
		key1: value1,
		key2: value2,
		key3: value3,
		key4: value4,
			...
	}
*/