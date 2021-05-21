function convertFahrToCelsius(temperature) {
	
	return (temperature - 32) * (5/9)
}
var Fahrenheit = prompt("Enter a number");
var result = convertFahrToCelsius(Fahrenheit);

if ( typeof Fahrenheit == "number"){
    alert(result);
}
if (typeof Fahrenheit == "0") {
    alert(result);
}
if (typeof Fahrenheit == "object") {
    alert("is not a valid number but a/an object.");
}

if (Fahrenheit === ['','','']){
    alert("This is an array");
}else{
    alert(result);
}