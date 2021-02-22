// roots for quadratic equation

	let aA = a = prompt("Please enter a positive integer for A.");
	let bB = b = prompt("Please enter a positive integer for B.");
	let cC = c = prompt("Please enter a positive integer for C.");
	//let xX = x = prompt("Please enter a positive integer for X.");
	console.log(a);
	console.log(b);
	console.log(c);

 let y = (b*b)-4*a*c;
if(y >= 1){
	let root1 = (-b + Math.sqrt(y))/2;
	let root2 = (-b - Math.sqrt(y)) /2;
	console.log(root1, root2);
}else if(y == 0){

	let root1 = root2 = -b/2*a;
	console.log(root1, root2);
}else{
	let realPart = (-b / (2 * a)).toFixed(1);
    let imagPart = (Math.sqrt(-y) / (2 * a)).toFixed(1);
	console.log(realPart, imagPart);
	console.log("No real roots.")
}