var iCost = prompt("Please Enter the item Price.");
var iDiscount = prompt("Please Enter the percentage of discount.")
var dPrice = iDiscount;
var dCost = (dPrice*iCost/100);
var finalPrice = iCost - dCost;
console.log("Price after discount is " + finalPrice);
