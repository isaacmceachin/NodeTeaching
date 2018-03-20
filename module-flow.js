//module-flow.js

//Importing modules
var prim_datatypes = require("./prim-datatypes");

var name = "Zach";
console.log(name);

//print object passed back from module
console.log(prim_datatypes);

//Flow contorl
//if statement

//same datatype and value
if(1 === 1){
	//true
	console.log("t");
}

//same value
if(1 == 1){
	//true
	console.log("t");
}

//Greater than or equal to
if(1 >= 0){
	//true
	console.log("t");
}

//Greater than
if(1 > 0){
	//true
	console.log("t");
}

//Less than 
if(1 < 0){
	//Do nothing
	console.log("Do nothing");
}else if(1 > -1){
	//True the last one doesn't happen
	console.log("this get\'s printed");
}else if(true){
	//True the last one doesn't happen
	console.log("this doens't get printed either");
}else{
	//Since the top 'else if' evaluates to true, this code block doens't run
	console.log("this is not printed");
}
//continue

//loops
//for loop
var iii = 0;
var end = 5;

for(iii=0;iii<end;iii++){
	console.log(iii);
}