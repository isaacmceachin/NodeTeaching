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