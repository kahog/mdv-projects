//Author:  Jeremy Orr
// For: SDI 1208
//Assignment:  Project 2
//08/09/2012

var businessType = "website"
	businessStarted ="The website that I'm going to start is ",
	budget = 10000
	steps = ["decided on a website name", "formulated budget", "made business plan", "gathered customers"]
	sites = ["facebook", "GooglePlus", "twitter", "linkedIn"],
	likes = [2800, 2400, 1800, 1700]; 
//	websiteName = "Launchshares.com "
//Procedure Function 	
var startABusiness = function(businessType){	
	if (businessType === "website"){	
	console.log("We have " + steps.length + " things to do.");
	} else {
	console.log("A website would have been way easier");
	};
	
};//ends the functions 
//Boolean function (decide a website name) 
var getWebsiteName = function(LaunchShares, FinallyLaunched){
	var websiteName;
	if (LaunchShares = true){
	var websiteName = "LaunchShares.com";
	console.log("The website we are going to build is " + websiteName + ", now we only have 3 things to do");
	return websiteName;
	} else {
	var websiteName = "FinallyLaunched.com";
	console.log("Even though we preferred LaunchShares.com The website we are going to build is " + websiteName + ", now we only have " + steps.length + "things to do."); 
	}return websiteName;
};
//Number Function (formulated budget)
var formulateBudget = function(budget){
	var monthlyExpense = 1640,
		monthsTilBroke = budget/monthlyExpense,
		monthsTilBroke = Math.round(monthsTilBroke);
	while(budget >= monthlyExpense && monthsTilBroke > 0){
	console.log("We still have " + monthsTilBroke + " months until we are broke. ");
	monthsTilBroke--;}
	return monthsTilBroke;
	};		
//String Function (make business plan)
var businessPlan = function(websiteName, businessType){
	var say = "Glad to have that stuff done for the " + websiteName + " " + businessType + ".";
	console.log(say)};
//Array Function  (gather customers)
var gatherCustomers = function(likes, sites){
	var adSitesOn;
	//added the .push to correct the necessary syntax for the array
	sites.push("pinterest");
	likes.push(1400);
	for (var adSites = 0; adSites < sites.length; adSites++){
	var adSitesOn = adSites + 1;	
	console.log("We just joined " +sites[adSites] +  " and have " +likes[adSites] + " from them.  We are now on " +adSitesOn +" sites.");
	}return adSitesOn;
};

var websiteName = getWebsiteName(true, false)
var monthsTilBroke = formulateBudget(budget)
console.log("We need to start generating revenues");
var say = businessPlan(websiteName, businessType)
var adSitesOn = gatherCustomers(likes, sites)
console.log("Finally we have over 10,000 likes");
