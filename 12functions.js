//author: Jeremy L. Orr
//for: SDI 1208
//Assignment: Project 4
//08/21/2012



var phoneNumberPattern = /1\d{9}/,
	phoneNumber = "14172299107",
	emailIs = "thanks@yahoo.com";
	sam = "42",
	number1 = 27,
	number2 = 35,
	oneDay = 1000 * 60 * 60 * 24,
  	firstDate = new Date(1983, 10, 2),
  	secondDate = new Date(1990, 2, 24);	
  	numbersArray = [1, 17, 12, 36, 45, 78, 22, 54, 43],
   	sortedNumbers = numbersArray.sort(),
	givenNumber = 44,
 	i = 0;
//Start function Library
var libOfFunctions = (function() {
	// check Email
	var checkEmail = function (emailEntered) {
		var email = emailEntered, 
			atSign = email.indexOf("@"),
			dot = email.lastIndexOf(".");
		if (atSign == -1 || dot == -1) {
		alert("Not a valid email address");
		} else if (dot < atSign){
		alert("Not a valid email address");
		} else if (dot - atSign == 1){
		alert("Not a valid email address");
		}else if (email = ""){
		alert("Not a valid email address");
		} else {
		alert("Thanks For the email address.");
		};
		return emailEntered;
	};
	//check Phone Number
  	var phoneNumberCheck = function(phoneNumber){
		var phoneNumberPattern = /1\d{9}/;
		if (phoneNumberPattern.test(phoneNumber) === true){
		alert("Thank you for the valid phone number.")
		} else {
		alert("Please insert a valid phone number.")
		};
		return phoneNumber;
	};
	// Get days between dates given	
  	var  getCount = function(firstDate, secondDate){
		var date1 = firstDate.getTime();
		var	date2 = secondDate.getTime();
		var	difference = date2 - date1;
			days = Math.round(difference/oneDay);
			alert("The difference, in days, between the two given dates is " + days);
	};
	//Change string to Number
	var changeToNumber = function(changeMe){
 		var number = +(changeMe);
 		alert(number);
	 };
	 //Fuzzy match a number to 10 percent
		var fuzzyMatch = function(number1, number2){
		var diff = (number2 - number1),
			fuzzy = ((diff/number2) * 100);
			fuzzyPercent = Math.round(fuzzy);
		if (fuzzyPercent > 10){
		alert("The difference is too high, it is " + fuzzyPercent + " percent.");
		} else {
		alert("Awesome the difference is only" + fuzzyPercent + " percent.");
		};
	};
	// get the first number in an array that is bigger than a given number
	 
	var firstPast = function(givenNumber){
		var i = 0;	 
		while (i < sortedNumbers.length){
	 		if (sortedNumbers[i] > givenNumber){
	 		alert("The first number in our array that is greater than " + givenNumber + " is " + sortedNumbers[i] + ".");
	 		break;
	 		} else {
	 		i++; 
	 		};
		};
	};
  return {
    checkEmail: checkEmail(emailIs),
    phoneNumberCheck: phoneNumberCheck(phoneNumber),
    getCount: getCount(firstDate, secondDate),
    changeToNumber: changeToNumber(sam),
    fuzzyMatch: fuzzyMatch(number1, number2),
	firstPast: firstPast(givenNumber)
  };
})();
