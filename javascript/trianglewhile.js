function areaOfTriangle(){
	var tBase = prompt("Pleas enter the measure of base value of triangle.");
	var b = tBase;
	var tHeight = prompt("Pleas enter the measure of height value of triangle.");
	var h = tHeight;
	alert("Base is " + b);
	alert("Height is " + h);
	while (b >= 1 && h >= 1)
	{
		var tArea = 1/2 * tBase * tHeight;
		alert("Area of Trianlge with " + tBase + " base and height " + tHeight + " is " + tArea );
		break;
	}
}
areaOfTriangle();