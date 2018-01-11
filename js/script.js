var currentSlide = 0;
var interval = 4000;

var slides = document.getElementsByClassName("shopSlide");
function init()
{
	console.log("init");
	console.log("end");
}

function slideShow()
{
	console.log("slides_js loaded");
	slides[currentSlide].className = 'shopSlide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'shopSlide showing';
	setTimeout(slideShow, interval);
}

function sliderColour()
{
	console.log("sliderColour loaded");
}
function googleMap()
{
	console.log("map loaded");
	var location = {lat: 51.5, lng: -0.12};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: location
	});
}
window.onload = function()
{
	console.log("Script Loaded");
	init();
	slideShow();
	sliderColour();
	googleMap();
};

