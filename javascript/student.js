//student
var isTopper = "You are not Topper."
var marksScored =window.prompt("Please enter the marks scored.")
if(marksScored==undefined || marksScored == null || marksScored == ""){alert("Enter Valid input.")}
	else if(marksScored < 0 ||  marksScored > 100)
		{alert ("Please number between 0 to 100")}
	else {marksScored = Number(marksScored)
var totalMarks=100
var percentageScored = (marksScored / totalMarks) * 100
alert(percentageScored)
if(percentageScored >= 90) {
	isTopper= "You are Topper."
	//else (percentageScored > 89){
		///isTopper ="You are roundedoff to 90."} 
		//isTopper="You are Topper."
//alert(isTopper)
}
else {isTopper = "You are not Topper."}
alert(isTopper)
}