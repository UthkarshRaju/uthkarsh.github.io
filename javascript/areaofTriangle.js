function areaOfTriangle(b, h){
	/*var tBase //= prompt("Pleas enter the measure of base value of triangle.");
	var b = tBase;
	var tHeight //= prompt("Pleas enter the measure of height value of triangle.");
	var h = tHeight;
	alert("Base is " + b);
	alert("Height is " + h);*/
	if(b >= 1 && h >= 1)
	{
		var tArea = 1/2 * b * h;
		alert("Area of Trianlge with " + b + " base and height " + h + " is " + tArea );
	}else{
		alert("Invalid values are entered.");
	}
}
areaOfTriangle(50, 50);