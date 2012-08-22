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
