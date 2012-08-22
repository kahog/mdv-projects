//validate phone number
var phoneNumberPattern = /1\d{9}/;
	phoneNumber = "14172299107";
	
var phoneNumberCheck = function(phoneNumber){
	if (phoneNumberPattern.test(phoneNumber) === true){
	alert("Thank you for the valid phone number.")
	} else {
	alert("Please insert a valid phone number.")
	};
};

phoneNumberCheck(phoneNumber);

//Change string to Number
var sam = "42"

var changeToNumber = function(changeMe){
 	var number = +(changeMe);
 	number.push
 	sam = number
 	return sam;
 };
 var numberChanged = changeToNumber(sam)
 alert(numberChanged);
 
 //check the difference between two dates
 var oneDay = 1000 * 60 * 60 * 24,
 	 firstDate = new Date(1983, 10, 2),
 	 secondDate = new Date(1990, 2, 24);
 	 
var  dateSpan = function(firstDate, secondDate){
	var date1 = firstDate.getTime();
	var	date2 = secondDate.getTime();
	var	difference = date2 - date1;
		days = Math.round(difference/oneDay);
		alert("The difference, in days, between the two given dates is " + days);
};
dateSpan(firstDate, secondDate);
 

 //Validate email
 var emailIs = "thanks@yahoo.com";

 function checkEmail(emailEntered) {
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
}
checkEmail(emailIs);
