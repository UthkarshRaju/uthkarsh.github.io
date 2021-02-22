var a = prompt("Please Enter first number");
var b = prompt("Please Enter second number");
var a = parseInt(a);
var b = parseInt(b);
var oPeration = prompt("Please Enter the operation to be performed.");
if(oPeration == 'add')
{
	var  c = a+b;
	console.log(c)
}
else if(oPeration == 'sub')
{
	var d = a-b;
	console.log(d);	
}if(oPeration == 'multi')
{
	var e = a*b;
	console.log(e);
}else if(oPeration =='div')
{
	var f = a/b;
	console.log(f);
}//else
//{
	//console.log('Please enter valid numbers and operations');
//}