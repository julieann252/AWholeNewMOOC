var questionNumber = 0;
var numCorrect = 0;
var attempts = 0;
var questions = [
	 {
		q: 'Imagine you’re designing the world’s first voice-guided navigation system for a car GPS. You want to find out if drivers can understand and respond to your voice directions while driving a car. Which prototype would you build for this purpose?', 
		a: [
			'Create a video of a person driving on a route, and then add your instructions as voiceover. Show participants this video, and pause the video after each instruction, and ask what participants would do.',
			'A paper prototype of the GPS display with multiple “screens” that each shows the map at a different part of a route. The participant evaluates the prototype in a lab. For each screen, the experimenter speaks out the turn directions, and asks the participant what she would do (e.g. “I\’d take the next exit”).',
			"Create a fully functional system (with a database of routes, directions and voice-clips etc.) on a laptop, and put the laptop in the car. The participant drives the car along the route, and hears the turn directions from the laptop.",
			 "Have pre-determined turn-by-turn directions for a particular route written on a notepad. The experimenter reads out the right directions while the participant drives on the route."
			 ],
		right: "Why this answer is right",
		wrong: "Suggested help to get the answer right",
		solution: "2"
	},
	{
		q: "Question 2 text", 
		a: [
			"Question 2 Answer 1 text",
			"Question 2 Answer 2 text",
			"Question 2 Answer 3 text",
			"Question 2 Answer 4 text"
			],
		right: "Why this answer is right",
		wrong: "Suggested help to get the answer right",
		solution: "2"
	},
	{
		q: "Question 3 text", 
		a: [
			"Question 3 Answer 1 text",
			"Question 3 Answer 2 text",
			"Question 3 Answer 3 text",
			"Question 3 Answer 4 text"
			],
		right: "Why this answer is right",
		wrong: "Suggested help to get the answer right",
		solution: "2"
	},
	{
		q: "Question 4 text", 
		a: [
			"Question 4 Answer 1 text",
			"Question 4 Answer 2 text",
			"Question 4 Answer 3 text",
			"Question 4 Answer 4 text"
			],
		right: "Why this answer is right",
		wrong: "Suggested help to get the answer right",
		solution: "2"
	},
	{
		q: "Question 5 text", 
		a: [
			"Question 5 Answer 1 text",
			"Question 5 Answer 2 text",
			"Question 5 Answer 3 text",
			"Question 5 Answer 4 text"
			],
		right: "Why this answer is right",
		wrong: "Suggested help to get the answer right",
		solution: "2"
	},
	{
		q: "Question 6 text", 
		a: [
			"Question 6 Answer 1 text",
			"Question 6 Answer 2 text",
			"Question 6 Answer 3 text",
			"Question 6 Answer 4 text"
			],
		right: "Why this answer is right",
		wrong: "Suggested help to get the answer right",
		solution: "2"
	},
	{
		q: "Question 7 text", 
		a: [
			"Question 7 Answer 1 text",
			"Question 7 Answer 2 text",
			"Question 7 Answer 3 text",
			"Question 7 Answer 4 text"
			],
		right: "Why this answer is right",
		wrong: "Suggested help to get the answer right",
		solution: "2"
	},
	{
		q: "Question 8 text", 
		a: [
			"Question 8 Answer 1 text",
			"Question 8 Answer 2 text",
			"Question 8 Answer 3 text",
			"Question 8 Answer 4 text"
			],
		right: "Why this answer is right",
		wrong: "Suggested help to get the answer right",
		solution: "2"
	},
	{
		q: "Question 9 text", 
		a: [
			"Question 9 Answer 1 text",
			"Question 9 Answer 2 text",
			"Question 9 Answer 3 text",
			"Question 9 Answer 4 text"
			],
		right: "Why this answer is right",
		wrong: "Suggested help to get the answer right",
		solution: "2"
	},
	{
		q: "Question 10 text", 
		a: [
			"Question 10 Answer 1 text",
			"Question 10 Answer 2 text",
			"Question 10 Answer 3 text",
			"Question 10 Answer 4 text"
			],
		right: "Why this answer is right",
		wrong: "Suggested help to get the answer right",
		solution: "2"
	}
];

var pass = {
		heading: "Nice Job!",
		text: "You did great! Keep up the good work and consider checking in on the forums to see if any other students need help completing this quiz."
	};
var fail = {
		heading: "Nice Try!",
		text: "It looks like you had a little bit of trouble completing this quiz.<br />We have added an additional video for you this week that will help you master these concepts."
	};

$(document).ready(function() {
	var list = $('#qnumber li');
	function questionSet() {
		$('#next').hide();
		$('.qblock, #submit').show();
		$('#questionNumber').html('Question ' + (questionNumber + 1) + ':');
		var currentQuestion = questions[questionNumber];
		$('#question').html(currentQuestion.q);
		currentQuestion.a.forEach(function(item, i) {
			var answerNumber = '#answer' + (i + 1);
			$(answerNumber).html(item);
		});
		list.removeClass('on');
		list.eq(questionNumber).addClass('on');
	}
	function grade() {
		$('.qblock, #submit').hide(); 
		var answer = $(':checked').val();
		attempts++;
		var currentQuestion = questions[questionNumber];
		if (answer == currentQuestion.solution) {
			$('#question').html(currentQuestion.right);;
			if (attempts == 1)
				numCorrect++;
			if (questionNumber == questions.length - 1)
				$('#finish').show();
			else
				$('#next').show();
		}
		else {
			$('#question').html(currentQuestion.wrong);
			$('#try').show();
		}
	}
	function finalGrade() {
		$('#finish').hide();
		var correctText = (numCorrect + " out of " + questions.length + " correct answers.<br />");
		if (numCorrect > 5) {
			var heading = pass.heading
			var body = pass.text
		}
		else {
			var heading = fail.heading
			var body = fail.text

		}
		$('#questionNumber').html(heading); 
		$('#question').html(correctText + body);
	}
	$('#next, #try, #finish').hide();
	questionSet();

	$('#next').click(function() {
		questionNumber++;
		attempts = 0;
		$(':checked').prop('checked', false);
		questionSet();	
	});

	$('#submit').click(function() {
		grade();
	});

	$('#try').click(function() {
		$('#try').hide();
		questionSet();
	})

	$('#finish').click(function() {
		finalGrade();
	});
});
