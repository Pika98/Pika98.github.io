//Initialise some variables, global in case use is required in multiple functions
var currentSlide = 0;
var interval = 4000;
function userData()
{
	document.getElementById('submit').onclick = function()
	{
		console.log("clicked");
		var input = document.getElementById('response').value;
		var storedJson = JSON.stringify(input);
		localStorage.setItem("response", storedJson);
	};
	document.getElementById('load').onclick = function()
	{
		console.log("clicked load");
		var loadedJson = localStorage.getItem("response");
		var text = JSON.parse(loadedJson);
		text = document.getElementById('response');
	};
}
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

//Window on load calls other functions
window.onload = function()
{
	console.log("Script Loaded");
	init();
	slideShow();
	sliderColour();
	userData();
};

