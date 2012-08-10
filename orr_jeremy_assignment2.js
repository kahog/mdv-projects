//Author:  Jeremy Orr
// For: SDI 1208
//Assignment:  Project 2
//08/09/2012

var businessType = "website"
	businessStarted ="The website that I'm going to start is ",
	budget = 10000
	steps = ["decided on a website name", "formulated budget", "made business plan", "gathered customers"]
	sites = ["facebook", "GooglePlus", "twitter", "linkedIn", "pinterest"],
	likes = [2800, 2400, 1800, 1700, 1400]; 
	websiteName = "Launchshares.com "
//Procedure Function 	
var startABusiness = function(businessType){	
	var stepCountNumber = steps.length,
		stepNumber = 0;
	console.log("We started with " + stepCountNumber + " things to do.");
};//ends the functions 
//Boolean function (decide a website name) 
var getWebsiteName = function(LaunchShares, FinallyLaunched){
	if (LaunchShares === "available"){
	var websiteName = "LaunchShares.com";
	console.log("The website we are going to build is " + websiteName + ", now we only have 3 things to do");
	return websiteName;
	} else {
	var websiteName = "FinallyLaunched.com";
	console.log("Even though we preferred LaunchShares.com The website we are going to build is " + websiteName + ", now we only have " + stepCountNumber + "things to do."); 
	}
};
//Number Function (formulated budget)
var formulateBudget = function(budget){
	var monthlyExpense = 1640,
		monthsTilBroke = budget/monthlyExpense ;
	while(budget >= monthlyExpense && monthsTilBroke > 0){
	console.log("We still have " + monthsTilBroke + " months until we are broke.");
	monthsTilBroke--;}
	};		
//String Function (make business plan)
var businessPlan = function(websiteName, businessType){
	var say = "Glad to have that stuff done for the ";
	console.log(say + websiteName +businessType)};
//Array Function  (gather customers)
var gatherCustomers = function(likes, sites){
	for (var adSites = 0; adSites < sites.length; adSites++){
	var adSitesOn = adSites + 1;	
	console.log("We just joined " +sites[adSites] +  "and have " +likes[adSites] + " from them.  We are now on " +adSitesOn +" sites.")
	}
};		
startABusiness(businessType);
getWebsiteName("available", "taken");
formulateBudget(10000);
businessPlan(websiteName, businessType);
gatherCustomers(likes, sites);
console.log("Finally we have over 10,000 likes");
