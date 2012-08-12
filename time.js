var mealTime =  function(){
	var time = new Date(),
	hour = time.getHours(),
	minutes = time.getMinutes(),
	seconds = time.getSeconds();
	timeOfDay = hour + ":" + minutes + ":" + seconds
	return timeOfDay;
}
var timeofday;
console.log(mealTime())