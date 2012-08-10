//Jeremy Orr
//Arrays

//var captain1 = "hook",
//	  captain2 = "morgan",
//	  captain3 = "sparrow"
//;

var captains = ["hook", "morgan", "sparrow"];

var adjectives = ["missing a hand",
					"delicious",
					"mad bonkers"];

console.log(captains[0]);

//add element to the array
//captains[3] = "barbossa";

// add element at end of array
captains.push("barbossa");

//add element at beginning of an array
captains.unshift ("barbossa");

//delete element from end of array
captains.pop();

//delete element at beginning of array
captains.shift();

//for loop with arrays

for(var i=0, j = captains.length; i<j; i++){
	console.log("captain " + captains[i] + " is " + adjectives[i]);
};