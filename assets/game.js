$(document).ready(function() { 


var answerCounter = 0;
var questionCounter = 0;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
var selectedAnswer;
var theClock;
var counter = 30;

var questionArray = ["who played batman in the dark knight","what is batmans favorite gadget", "who is batmans butler"];
var answerA = ["Bale", "Batarang", "Alfred Pennyworth"];
var answerB  =["Affleck", "bat bombs", "Alfred Pennyless"];
var answerC = ["Clooney", "bat grenades", "Alfred Pennymore"];
var answerD = ["west", "bat phone", "Alfred Pennysame"];
var correctAnswers = ["Bale", "Batarang", "Alfred Pennyworth"]

function generateQandA (){
	$('#questionDisplay').html(questionArray[questionCounter])

	$("#answerA").html(answerA[answerCounter]);
	$("#answerB").html(answerB[answerCounter]);
	$("#answerC").html(answerC[answerCounter]);
	$("#answerD").html(answerD[answerCounter]);
}




generateQandA();





function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}
timerWrapper();



$("body").on("click", ".answer", function(event){
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		alert("correct");

		clearInterval(theClock);
		generateWin();
	}
	else {
		alert("wrong answer!");
		clearInterval(theClock);
		generateLoss();
	}
}); // Close .answer click


function counterFunction () {
	answerCounter ++;
	questionCounter ++;		
}

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "Time Remaining: " + counter;
	$(".timer").html(gameHTML);
	alert("You didn't answer in time. The answer is: " + correctAnswers[questionCounter]);
	setTimeout(wait, 2000); 
	counterFunction ();
}
function generateWin() {
	correctTally++;
	gameHTML = "Time Remaining: " + counter;
	$(".timer").html(gameHTML);
	alert("Correct! The answer is: " + correctAnswers[questionCounter]);
	setTimeout(wait, 2000); 
	counterFunction ();
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "Time Remaining: " + counter;
	$(".timer").html(gameHTML);
	alert("Wrong. The answer is: " + correctAnswers[questionCounter]);
	setTimeout(wait, 2000); 
	counterFunction ();
}

function generateHTML() {
	gameHTML = "Time Remaining: " + counter;
	$(".timer").html(gameHTML);
	generateQandA();
}



function wait() {
	if (questionCounter < 2) {
	questionCounter++;
	generateHTML();
	counter = 3;
	timerWrapper();
	}
	else {
		alert("End game?")
	}





function resetGame() {
	questionCounter = 0;
	answerCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}






};
});