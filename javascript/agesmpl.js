/*Write a function calculateAge() that takes your birthday in the format dd,mm,yyyy
 and returns your age. 
Sample function input
calculateAge(28,02,1992)
Output - 28
*/

let calculateAge = function(dd, mm, yyyy){

    let pDay = new Date();
    let bDay = new Date(yyyy, mm, dd);
    let months = bDay.getMonth();
    let pMonth=pDay.getMonth()+1;
    let age=pDay.getFullYear()-bDay.getFullYear();
    if(months==pMonth){
        if(bDay.getDate()>pDay.getDate()){
            age--;
        }
    }
    else if(months>pMonth){
        age--;
    }
    console.log(age);
       return age;

};
calculateAge(27, 1, 1995);
calculateAge = {calculateAge: calculateAge};

