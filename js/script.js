//Initialise some variables, global in case use is required in multiple functions
var currentSlide = 0;
var interval = 4000;


var slides = document.getElementsByClassName("shopSlide");
function init() //Simple log checker to ensure 
{
	console.log("init");
	console.log("end");
}

function slideShow()
{
	console.log("slides_js loaded");
	slides[currentSlide].className = 'shopSlide'; //Make current slide invisible
	currentSlide = (currentSlide+1)%slides.length; //increment length irrespective of total number of images
	slides[currentSlide].className = 'shopSlide showing'; //show next image
	setTimeout(slideShow, interval); //begin interval
}

function sliderColour()
{
	var themeColour;
	var sliderColour;
	console.log("sliderColour loaded");
	themeColour = document.getElementById('colourStatus').style.color;
	sliderColour = document.getElementById('colourInput').style.backgroundColor;
	themeColour = sliderColour;
}
function userResponse()
{
	var storeText = document.getElementById('response');
	var stored = JSON.stringify(storeText);
	if(document.getElementById('submit').clicked == true)
	{
		console.log('clicked');
		document.getElementById('response').innerHTML = stored;
	}
}
//Window on load calls other functions
window.onload = function()
{
	console.log("Script Loaded");
	init();
	slideShow();
	sliderColour();
	userResponse();
};

