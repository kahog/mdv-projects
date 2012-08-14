//Author: Jeremy Orr
//Assignment: Project 3
//Class: SDI 1208
//08/12/2012
//randomize snack choice
var isHungry = true;
	snack = ["PB and J", "Crackers and Cheese", "Corn dog"],
	snackCount = snack[Math.floor(Math.random() * snack.length)];
	
//procedure function	
var	thisMeal = function(forMeal){
	if (mealTime() >= 3 && mealTime() < 9){
	var forMeal = mealDetails["meals"]["breakfast"].TheMealIs;
	console.log(forMeal)
	return forMeal;
	} else if (mealTime() >= 9 && mealTime() < 15){
	var forMeal = mealDetails["meals"]["lunch"].TheMealIs;
	console.log(forMeal)
	} else {
	var forMeal = mealDetails["meals"]["dinner"].TheMealIs;
	console.log(forMeal)
	} return forMeal;
};

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


//decide what meal we are having and runs console.log statements determining what we are having
var whatMeal = function(mealTime){
	if (mealTime >= 0 && mealTime < 3 ){
	console.log("Let's make a midnight snack")
	} else if(hour >= 3 && hour < 6 ){
	console.log("Why are we making a meal at " + mealTime())
	} else if(mealTime >= 6 && mealTime < 9 ){
	console.log("Its only " + mealTime + "but let's make breakfast")
	console.log(randomMealChoice(forMeal))
	} else if(mealTime >= 9 && mealTime < 12 ){
	console.log("Since it's " + mealTime + "let's make a " + snackCount +".")
	} else if(mealTime >= 12 && mealTime < 15 ){
	console.log("let's have lunch since it's " + timeOfDay)
//	console.log(randomMealChoice(forMeal))
	} else if(mealTime >= 15 && mealTime < 18 ){
	console.log("Since it's " + timeOfDay + " let's have a " + snackCount + " and wait until dinner")
	} else if(mealTime >= 18 && mealTime < 21 ){
	console.log("Finally it's dinner time, I am ready to have something amazing")
	console.log(randomMealChoice(forMeal))
	} else {
	console.log("Let's make a midnight snack")
	};
};
var forMeal;
//boolean function
var hungry = function(isHungry){
	if (isHungry = true){
	console.log("Let's make some food I'm hungry");
	} else {
	console.log("I'm not hungry let's do some homework")
	};
};
//number function
//Number of available meal choices throughout the day

var mealChoices = function(forMeal){
	var numberMealChoices = mealDetails["meals"][forMeal].condiments.length * 
	mealDetails["meals"][forMeal].meat.length *mealDetails["meals"][forMeal].drink.length;
	console.log("The number of meal choices we have for " + forMeal + " is " + numberMealChoices + ".");
	return numberMealChoices;
 }; 
 
 //string concatenation
 var randomMealChoice = function(forMeal){
	var drinkChoice		= mealDetails["meals"][forMeal].drink
		meatChoice		= mealDetails["meals"][forMeal].meat		
		condimentChoice	= mealDetails["meals"][forMeal].condiments
	
		randomCondimentChoice 	= condimentChoice[Math.floor(Math.random() * condimentChoice.length)]
	   	randomMeatChoice 		= meatChoice[Math.floor(Math.random() * meatChoice.length)]
		randomDrinkChoice		= drinkChoice[Math.floor(Math.random() * drinkChoice.length)]
		chosenChoices	= console.log("For " +forMeal + " we are going to have " + mealDetails["meals"][forMeal].appetizer +", " + mealDetails["meals"][forMeal].entree + ", " + randomDrinkChoice + ", " + randomMeatChoice+ ", and " + randomCondimentChoice+ ".")
		return chosenChoices;
	};



mealTime()
console.log("Right now it is " + timeOfDay)	
hungry(true);	
whatMeal(mealTime());
mealChoices(thisMeal());
randomMealChoice(thisMeal(forMeal));




