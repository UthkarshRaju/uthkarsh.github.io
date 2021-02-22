let calculateAge = function (dd, mm, yyyy) {

let pDay = new Date();

//console.log(pDay);

 

let bDay = new Date(yyyy, mm + 1, dd);

//console.log(bDay);

 

//GETTING MONTHS AND YEAR

 

let years = pDay.getFullYear() - bDay.getFullYear();

console.log(years);

let months = (bDay.getMonth()- pDay.getMonth());

console.log(months);
if(months==-1)
{
	months= months-1;
	console.log(months);
}else
{
  console.log(months);
}

let finalYear = Math.floor(years-months);

console.log(finalYear);

let finalMonth = (months % 12);

console.log(`Your age is ${finalYear} years and ${finalMonth} months`);

return finalYear;

};

calculateAge(10, 01, 1996);

calculateAge = { calculateAge: calculateAge };

