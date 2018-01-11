
function googleMap()
{
	console.log("map loaded");
	var location = {lat: 48.856614, lng: 2.352222};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: location
	});
	var marker = new google.maps.Marker({
		position: location,
		title: 'Home Of Daft Punk',
		map:map
	});
}
window.onload = function()
{
	console.log("Script Loaded");
	googleMap();
};