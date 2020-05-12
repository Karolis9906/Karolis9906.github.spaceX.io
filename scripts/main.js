
//Distance traveled
var distanceTraveled = 10000;

function updateDistanceTraveled(){
	distanceTraveled += 1;
	document.getElementById('DistanceTraveled').innerHTML = 'Distance traveled: ' + distanceTraveled + ' killometers'
}

setInterval(updateDistanceTraveled, 1000);



//Remaining fuel
var rocketFuel = 1900000;

function updateFuelRemainig(){
	rocketFuel -= 1;
	document.getElementById('FuelUsed').innerHTML = 'Fuel remaining: ' + rocketFuel + ' liters'
}

setInterval(updateFuelRemainig, 4000);



//Remaining food options
var remainingFoodList = ['ketchup', ' broccoli', ' tortillas', ' cauliflower.'];



var remainingFood = document.getElementById('Food');
	remainingFood.innerText = 'Remainng food choices: ' + remainingFoodList;

setTimeout(function () {
    alert('Food quantity is critical, danger of starvation is imminent');
}, 5000);


//meteors that hit the spaceship
function meteors(){
	var number = Math.random();
	number = (number * 50) + 1;
	number = Math.floor(number);
	return number;
}

var asteroidsHit = document.getElementById('meteors');
	asteroidsHit.innerText = 'Asterods hit today: ' + meteors();


