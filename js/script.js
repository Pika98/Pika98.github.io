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
	console.log("sliderColour loaded")
}
window.onload = function()
{
	console.log("Script Loaded");
	init();
	slideShow();
	sliderColour()
};

