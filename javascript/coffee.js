//string
var myMessage = "Welcome Bond";
var happyDay = "HappyDay!!!";
alert (myMessage)
alert (happyDay)
//alert("Espresso" +  "Doubleshot"  +  "Capacino");
var aCoffee = ["Espresso","Doubleshot","Capacino","Double Espresso","Dounut"];
alert(aCoffee)
/*alert(aCoffee[1])
alert(aCoffee[2])
alert(aCoffee[3])
alert(aCoffee[4])*/
//Object
var foodItem = window.prompt('Please Enter the Item Name')
//alert(foodItem)
switch(foodItem){
 case "Espresso":
//"itemType" : "Coffee",
//"itemName" : "Espresso",
//"itemQuantity" : "Large",
//"itemCost" : "Rs "+230,
result = ("Rs "+ 230)
break;
//"isAvailable" : true,
//"quantityAvailable" : 20,
case "Doubleshot":
result = ("Rs "+ 180)
break;
case "Capacino":
result = ("Rs "+ 200)
break;
case "Double Espresso":
result = ("Rs "+ 250)
break;
case "Dounut": 
result= ("Rs "+ 40)
break;

default :
window.prompt('Enter valid input')
}
alert(result)
//else {alert("Please Visit Again.")}