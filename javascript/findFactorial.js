/*
Complete the function below to find the factorial of a number 
If you don’t know what a factorial is, please follow this link - https://en.wikipedia.org/wiki/Factorial
sample input : findFactorial(4)
output - 24
*/

function factorial(x){
	var findFactorial=1
 for(var i=1;i<=x ;i++)
{
  findFactorial = findFactorial*i
}
  return findFactorial;    
}
var x = prompt("Enter a positive integer.")
findFactorial=factorial(x)
alert("Factorial of " + x + " is " + findFactorial);
//module.exports = { factorial.findFactorial(x) };

