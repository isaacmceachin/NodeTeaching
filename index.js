/*
	Multiline comments
*/

//Single line comments

//String
var name = "Isaac";

//Char
var middle = 'e';

//Integer
var age = 23;

//Float/Double
var weight = 186.5;

//boolean
var alive = true;

//Functions
//Declare
function funcName(){
	console.log(123);
}
//Invoke
funcName();

//Declare
function funcNameSingleParam(a){
	console.log(a);
}
//Invoke
funcNameSingleParam("abc");

//Declare
function funcNameMultiParam(a, b, c){
	console.log(a);
	console.log(b);
	console.log(c);
}
//Invoke
funcNameMultiParam(9,false,"hello world");

/*
//Declare
function funcNameDefaultParams(a=1,b=2,c=3){
	console.log(a);
	console.log(b);
	console.log(c);
}
funcNameDefaultParams();//output:1 2 3
funcNameDefaultParams("!");//output:! 2 3
funcNameDefaultParams("!","@");//output:! @ 3
funcNameDefaultParams("!",false,903);//output:! false 903
*/

//Declare
function funcReturnValue(a){
	return 10 + a;
}
//Invoke
var c = funcReturnValue(5);
console.log(c);

//Declare
var storedFunc = function(param1, param2){
	console.log(param1);
	console.log(param2);
	return (param1 * param2);
};
//Invoke
var multiply = storedFunc(10, -8);
console.log(multiply);

//Declare
(function(){
	console.log(".");
}()/*Invoke*/);

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
	console.log("Hello, " + this.name + "!");
};
//call greet function on isaac object
isaac.greet();