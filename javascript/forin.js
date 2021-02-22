var orderDetails =[
{
	"orderID": "111",
	"custID" : "222",
	"custName"  : "ABC",
	"orderDate" : "2020-12-12"
},
{
	"orderID": "333",
	"custID" : "444",
	"custName"  : "XYZ",
	"orderDate" : "2020-11-11"
}
]

for(x in orderDetails)
{
	alert(orderDetails[x].custID)
}