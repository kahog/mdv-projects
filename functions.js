//author: jeremy Orr
// functions

var pi = 3.141592

var getArea = function (r) {
	var area = r * r * pi;
	return area;
};

var reportArea = function(name, area, message){
	console.log(name + "'s circle has " + area + " area, and " + message);
};

var area = getArea(10);
reportArea("Frank", area, "is awesome")