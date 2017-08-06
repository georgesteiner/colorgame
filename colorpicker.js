var swatches = document.querySelectorAll(".square");
var winningSwatch = null;
var rgbText = document.querySelector("#rgbText");
var winningColor = null;
var correctScore = 0;
var incorrectScore = 0;
var restartButton = document.querySelector("#restartGame");


gameStart();

function gameStart (levelOfDifficulty) {

	// document.querySelector("#restartGame").addEventListener("click", restartGameClicked);

	restartButton.addEventListener("click", restartGameClicked);
	restartButton.style.color = "#232323";

	for (var i = 0; i < swatches.length; i++) {

		swatches[i].addEventListener("click", function (){

			if (!this.classList.contains("clicked")) {

				if (this.id === "winner") {
					winnerClicked();
					correctScore++;

					for (var i = 0; i < swatches.length; i++) {
						swatches[i].classList.add("clicked");
					}

				}
				else {
					this.style.opacity = 0.3;
					incorrectScore++;
					this.classList.add("clicked");

				}

				document.querySelector("#correctScore").innerText = correctScore;
				document.querySelector("#incorrectScore").innerText = incorrectScore;


			}
		})
	}

	newRound();







	$(function(){
		$('.repeat').click(function(){
	    	var classes =  $(this).parent().attr('class');
	        $(this).parent().attr('class', 'animate');
	        var indicator = $(this);
	        setTimeout(function(){ 
	        	$(indicator).parent().addClass(classes);
	        }, 20);
	    });
	});











};

function newRound() {
	winningSwatch = Math.floor((Math.random() * 6) + 0);

	for (var i = 0; i < swatches.length; i++) {
		
		swatches[i].style.backgroundColor = createRandomRGB();
		swatches[i].style.opacity = 1;
		swatches[i].classList.remove("clicked");


		if (i === winningSwatch) {
			swatches[i].id = "winner";
			rgbText.innerText = swatches[i].style.backgroundColor;
			winningColor = swatches[i].style.backgroundColor;
		}
	}
}

function winnerClicked() {
	for (var i = 0; i < swatches.length; i++) {
		swatches[i].style.backgroundColor = winningColor;

	}

	document.querySelector("#topBar").style.backgroundColor = winningColor;
	restartButton.style.color = "#ffffff";

}

function restartGameClicked () {

	console.log("restart game clicked ")

	for (var i = 0; i < swatches.length; i++) {
		swatches[i].removeAttribute("id");
	}

	newRound();

	document.querySelector("#topBar").style.backgroundColor = "#87878C";
}

function createRandomRGB() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var completeRGB = "rgb(" + red + "," + green + "," + blue + ")";
	return completeRGB;
}

