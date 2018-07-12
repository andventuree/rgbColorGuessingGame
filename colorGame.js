var numSquares = 9;
var colors = [];
// var colors = generateRandomColor(numSquares);- no longer use because of init function

// original colors array
// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ];


var pickedColor;
// var pickedColor = pickColor(); - no longer use because of init function
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');
var modeButtons = document.querySelectorAll('.mode'); 

//need to call the init() function to get things started
init();

//refactoring code, just calling functions now
function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for(var i = 0; i < squares.length; i++){
		// add initial colors to squares
		squares[i].style.background = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked squares
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = 'You Got It!';
				resetButton.textContent = 'Play Again!';
				//want to change all the squares to be the right color
				changeColors(clickedColor);
				h1.style.background = pickedColor;
			} else {
				//changes clicked square to background color making it disappear
				this.style.background = "#232323";
				messageDisplay.textContent = 'Try Again, Potato!';
			}
		}); 
	}
}

//rule of thumb - if it takes 10 lines of code to do something, 
//should break it to be function
function setupSquares() {
	//mode button event listeners
	for (var i = 0; i < modeButtons.length; i++ ){
		modeButtons[i].addEventListener('click', function() {
			//remove the mode
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			//then add to the mode picked
			this.classList.add('selected');
			//turnary operator - shorter way to write an if stat
			this.textContent === "Easy" ? numSquares = 3: numSquares = 9;
				// if(this.textContent === "Easy") {
				// 	numSquares = 3;
				// } else {
				// 	numSquares = 6;
				// }
			reset();
		});
	}
}



function reset() {
	//generate all new colors
	colors = generateRandomColor(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change the color of the squares on the page
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change color of squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = 'none';
		}

		squares[i].style.background = colors[i];
	}
	// when reset button is pressed, the picked color is taken out
	h1.style.background = 'steelblue';
}


// old single mode buttons - 
// //toggles hard and easy mode
// easyBtn.addEventListener('click', function() {
// 	hardBtn.classList.remove('selected');
// 	easyBtn.classList.add('selected');
// 	numSquares = 3
// 	colors = generateRandomColor(numSquares); 
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++ ) {
// 		if ( colors[i]){
// 			squares[i].style.background = colors[i];  
// 		} else {
// 			squares[i].style.background = '#232323';
// 		}
// 	}
// });

// hardBtn.addEventListener('click', function() {
// 	easyBtn.classList.remove('selected');
// 	hardBtn.classList.add('selected');
// 	numSquares = 9;
// 	colors = generateRandomColor(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++ ) {
// 		squares[i].style.background = colors[i];  
// 		squares[i].style.display = 'block';
// 	}
// });


resetButton.addEventListener('click', function (){
reset();
});

//colorDisplay.textContent = pickedColor; - no longer need because it is run in the init function

function changeColors(color) {
	//loop thorugh all squares to chan ge color to match pickedColor
	for ( var i = 0; i < squares.length; i++ ) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor () {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColor(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for (var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	// "rgb( r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}






