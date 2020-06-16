var h3 = document.getElementsByTagName("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("bodyTag");

function addColor(){
	body.style.background = "linear-gradient(to right,"+color1.value +"," + color2.value + ")";
}

color1.addEventListener("input",addColor);
color2.addEventListener("input",addColor);