function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
	var correct = 0;


	if (question1 == "jumpman") {
		correct++;
}
	if (question2 == "Rainbow Road") {
		correct++;
}	
	if (question3 == "King Koopa") {
		correct++;
}
    if (question4 == "A carpenter") {
        correct++;
}
    if (question5 == "expressions were hard to design at that time") {
        correct++;
    }
	if (question6 == "Yoshi") {
        correct++;
    }

	var pictures = ["assets/images/AwsomeJob.gif", "assets/images/Better Luck Next Time.gif", "assets/images/yoshi.gif"];
	var messages = ["Awsome job!", "Better Luck Next Time", "You're Killing Me Smalls"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
    }
    
    if (correct == 4) {
        score = 0;
	}
	
	if (correct == 5) {
		score = 0;
	}

	if (correct == 6) {
		score = 0;
	}
	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	