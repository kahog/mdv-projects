//Author: Jeremy Orr
//Assignment: Project 3
//Class: SDI 1208
//08/12/2012
//randomize snack choice
var isHungry = true;
	snack = ["PB and J", "Crackers and Cheese", "Corn dog"],
	snackCount = snack[Math.floor(Math.random() * snack.length)];
//gets the time of day being run and returns mealTime accordingly
 var mealTime =  function(){
	var time = new Date(),
	hour = time.getHours(),
	minutes = time.getMinutes(),
	seconds = time.getSeconds();
	timeOfDay = hour + ":" + minutes + ":" + seconds
	return timeOfDay, hour;
};
var hour;
var timeOfDay;
var whatMeal = function(mealTime){
	if (mealTime.hour >= 0 && mealTime.hour < 3 ){
	console.log("Let's make a midnight snack")
	} else if(hour >= 3 && hour < 6 ){
	console.log("Why are we making a meal at " + mealTime())
	} else if(mealTime >= 6 && mealTime < 9 ){
	console.log("Its only " + mealTime + "but let's make breakfast")
	} else if(mealTime >= 9 && mealTime < 12 ){
	console.log("Since it's " + mealTime + "let's make a " + snackCount +".")
	} else if(mealTime >= 12 && mealTime < 15 ){
	console.log("let's have lunch since it's " + timeOfDay())
	} else if(mealTime >= 15 && mealTime < 18 ){
	console.log("Since it's " + timeOfDay + " let's have a " + snackCount + " and wait until dinner")
	} else if(mealTime >= 18 && mealTime < 21 ){
	console.log("Finally it's dinner time, I am ready to have something amazing")
	} else {
	console.log("Let's make a midnight snack")
	};
};
if ( isHungry = true ){
	console.log("lets make some food I'm hungry");
	} else {
	console.log("I'm not hungry let's do some homework")
	}
whatMeal(mealTime());

var hungry = function(){
	if (isHungry = true)
	console.log("lets make some food I'm hungry");
	} else {
	console.log("I'm not hungry let's do some homework")
	})
hungry();	
whatMeal(mealTime());