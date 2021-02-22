function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getFullYear() - 1992);
}

console.log(calculate_age(new Date(1992)));

//console.log(calculate_age(new Date(1962, 1, 1)));
