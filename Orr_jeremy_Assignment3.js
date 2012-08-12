//Author: Jeremy Orr
//Assignment: Project 3
//Class: SDI 1208
//08/12/2012
var afterNoon = function(mealtime){
	if(mealtime >= 1300){
	var afterLunch = mealTime - 12 + "PM"
	}return afterLunch;
}

var whatMeal = function(mealTime){
	if (mealTime >= 0 && mealTime < 3 ){
	console.log("Let's make a midnight snack")
	} else if(mealTime >= 3 && mealTime < 6 ){
	console.log("Why are we making a meal at " + mealTime + ")
	} else if(mealTime >= 6 && mealTime < 9 ){
	console.log("Its only " + mealTime + "but let's make breakfast")
	} else if(mealTime >= 9 && mealTime < 12 ){
	console.log("Since it's " + mealTime + "let's make a " + snack +".")
	} else if(mealTime >= 12 && mealTime < 15 ){
	console.log("let's have lunch since it's " + afterNoon)
	} else if(mealTime >= 15 && mealTime < 18 ){
	console.log("")
	} else if(mealTime >= 18 && mealTime < 21 ){
	console.log("")
	} else {
	console.log("Let's make a midnight snack")
	};
};