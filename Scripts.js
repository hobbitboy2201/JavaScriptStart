//var lmao = 3 //Do not have to declare every detail of a variable like in C#

//console.log("Hello!") //Print command
//console.log(4+4)
//console.log(lmao)
//console.log(`hi ${lmao}`) //Marks used are from the button left of the number '1', the weird button

//alert("Welcome to my epic webpage!!!!!") //Shows up as soon as the webpage is loaded

//prompt("Enter your name!") //Asks the user to enter an input

//var name = prompt("Please enter your name")
//console.log(name) //Prints the users input to the console

//var number1 = prompt("Please enter your first number number")
//var number2 = prompt("Please enter the second number")
//var result = Number(number1) + Number(number2)
//alert(`The result of your calculation is: ${result}`)

/*

document.getElementById("msg").innerHTML = "Changed with JS" //Change a HTML element depending on it's id

//Change text depentent on time

var today = new Date()
var HourNow = today.getHours()
var greeting

if (HourNow > 18){
    greeting = "Good evening"
}
else if (HourNow > 12){
    greeting = "Good afternoon"
}
else if (HourNow > 0){
    greeting = "Good morning"
}
else {
    greeting = "Welcome!"
}

document.getElementById("Time").innerHTML = greeting

*/



//invoice example
var sign = "Bristol Zoo!";
var length = sign.length;
var subtotal = length * 2.99;
var shipping = 4.99;
var total = (subtotal+shipping).toFixed(2);

document.getElementById("userSign").innerHTML= sign;
document.getElementById("tiles").textContent = length;
document.getElementById("subtotal").textContent = `£${subtotal}`;
document.getElementById("shipping").textContent = `£${shipping}`;
document.getElementById("total").textContent = `£${total}`;

function ChangeCustomerSign(){
    var sign = document.getElementById("CustomerSign").value;
    if (sign != ""){
        document.getElementById("userSign").innerHTML = sign
    }
}