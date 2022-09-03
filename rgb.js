var numOfSqu=6 ;
var colors = generateRandomColors(numOfSqu) ; 

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor() ;  
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message") ;
var h1 = document.querySelector("h1") ;  
var reset = document.querySelector("#reset") ; 
var easy = document.querySelector("#easy") ;
var hard = document.querySelector("#hard") ; 


easy.addEventListener("click" , function(){
	easy.classList.add("selected");
	hard.classList.remove("selected") ; 
	numOfSqu = 3 ;
	colors = generateRandomColors(numOfSqu) ; 
	pickedColor = pickColor() ; 
	colorDisplay.textContent = pickedColor;
	 for (var i = 0; i < squares.length; i++) {
		if( colors[i]) {
			squares[i].style.backgroundColor = colors[i] ; 
	 	}
	 	else {
		squares[i].style.display = "none" ;
	}
 
		
	}
});
hard.addEventListener("click" , function(){
	hard.classList.add("selected");
	easy.classList.remove("selected") ;
	numOfSqu = 6 ; 
	colors = generateRandomColors(numOfSqu) ; 
	pickedColor = pickColor() ; 
	colorDisplay.textContent = pickedColor;
	 for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];	
		squares[i].style.display = "block" ; 	
 
	} 
});



reset.addEventListener("click" , function(){
	colors = generateRandomColors(numOfSqu) ; 
	pickedColor = pickColor() ; 
	colorDisplay.textContent = pickedColor ;
	message.textContent = "";
	this.textContent = "NEW COLORS"; 
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i] ; 
		//understand
	}
	h1.style.backgroundColor = "steelblue";
})
colorDisplay.textContent = pickedColor ; 
for (var i = 0 ; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click" , function() {
		var clickedColor = this.style.backgroundColor ; 
		if(clickedColor === pickedColor){
			message.textContent = "correct!";
			changeColors(clickedColor) ; 
			h1.style.backgroundColor= clickedColor ;	
			reset.textContent = "Play Again ? " ; 
				} 
		else {
			this.style.backgroundColor = "#232323" ; 
			message.textContent = "Try Again" ; 
		}
	});
} 
function changeColors (color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color ; 
	}
}
function pickColor(){
	var random = Math.floor(Math.random() *colors.length) ; 
	return colors[random] ; 
}
function generateRandomColors(number){
	var arr = [] ; 
	for (var i = 0; i < number; i++) {
		arr[i] = randomColor();
	}
	return arr ; 

}
function randomColor(){
	var r = Math.floor(Math.random() * 256) ; 
	var g = Math.floor(Math.random() * 256) ;
	var b = Math.floor(Math.random() * 256) ;

	return "rgb("+r+", "+g+", "+b +")";

}