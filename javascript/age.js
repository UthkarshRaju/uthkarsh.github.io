let calculateAge = function (dd, mm, yyyy) {

let pDay = new Date();

//console.log(pDay);

 

let bDay = new Date(yyyy, mm - 1, dd);

//console.log(bDay);

 

//GETTING MONTHS AND YEAR

 

let years = pDay.getFullYear() - bDay.getFullYear();

let months = (pDay.getMonth() - bDay.getMonth());

let finalYear = Math.floor(months / 12);

//let finalMonth = (months % 12);

//console.log(`Your age is ${finalYear} years and ${finalMonth} months`);

return finalYear;

};

calculateAge(15, 01, 1996);

calculateAge = { calculateAge: calculateAge };