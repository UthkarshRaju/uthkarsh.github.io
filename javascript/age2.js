/*Write a function calculateAge() that takes your birthday in the format dd,mm,yyyy
 and returns your age. 
Sample function input
calculateAge(28,02,1992)
Output - 28
*/
let calculateAge = function(dd, mm, yyyy){
	let pDay = new Date();
	let days = {};
    //console.log(pDay)
    let bDay = new Date(yyyy, mm-1, dd);
    console.log(bDay);
    let months = (bDay.getMonth()-12);
    let finalMonths = (bDay.getMonth()-12)-months;
    //console.log(months);
    //console.log(days);
    let tAge = pDay.getFullYear() - bDay.getFullYear();
    console.log("You are "+ tAge + " years " + finalMonths + " months old.");
    return tAge;
    
 };
calculateAge(13, 04, 1972);
calculateAge = {calculateAge: calculateAge};
