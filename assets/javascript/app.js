var question0 = {
	id: "q0",
	questionText: "Question 0 placeholder",
	answers: ["Answer 0", 
				"Answer 1",
				"Answer 2",
				"Answer 3"],
	correctAnswerIndex: 2,
	image: ""
}

var question1 = {
	id: "q1",
	questionText: "Question placeholder",
	answers: ["Answer 0", 
				"Answer 1",
				"Answer 2",
				"Answer 3"],
	correctAnswerIndex: 2,
	image: ""
}

var question2 = {
	id: "q2",
	questionText: "Question placeholder",
	answers: ["Answer 0", 
				"Answer 1",
				"Answer 2",
				"Answer 3"],
	correctAnswerIndex: 2,
	image: ""
}

var question3 = {
	id: "q3",
	questionText: "Question placeholder",
	answers: ["Answer 0", 
				"Answer 1",
				"Answer 2",
				"Answer 3"],
	correctAnswerIndex: 2,
	image: ""
}

var question4 = {
	id: "q4",
	questionText: "Question placeholder",
	answers: ["Answer 0", 
				"Answer 1",
				"Answer 2",
				"Answer 3"],
	correctAnswerIndex: 2,
	image: ""
}

var questions = [];

questions.push(question0);
questions.push(question1);
questions.push(question2);
questions.push(question3);
questions.push(question4);

var Game = {
	correct: 0,
	incorrect: 0,
	questions: [],

	initGame: function(questions) {
		this.correct = 0;
		this.incorrect = 0;
		this.questions = questions;
		this.displayQuestion(questions[0]);
	},

	startTimeout: function() {
	},

	displayQuestion: function(question) {
		var display = $("#display-area");
		display.append($("<h2>").text(question.questionText).attr("id", "question"));
		for (var i = 0; i < question.answers.length; i++) {
			var answer = $("<h3>").addClass("answer").data("answer", i).text(question.answers[i]);
			display.append(answer);
		}
	}
}


Game.initGame(questions);