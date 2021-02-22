function nPrime(x){
	var x = prompt("Enter a number to know whether it is a  prime number or not")
	if(x==1){
		alert( "The number " + x + " is neither prime nor composite.")
	}
	else if(x>1){
		for(i=2; i<x; i++)
		{
			if(x % i == 0)
			{
				alert("The number " + x + " is not a prime number.")
			}
			else{alert("The number " + x + " is  a prime number.")}
				break;
		}
	}
}
nPrime();