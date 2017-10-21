var question0 = {
	id: "q0",
	questionText: "Where does Dracula live?",
	answers: ["Pennsylvania", 
				"Sylvania",
				"Poughkeepsie",
				"Transylvania"],
	correctAnswerIndex: 3,
	image: ""
}

var question1 = {
	id: "q1",
	questionText: "What is the name of the mad scientist who created a monster?",
	answers: ["Dr. Octopus", 
				"Dr. Frankstein",
				"Dr. Frankenfurter",
				"Dr. Pepper"],
	correctAnswerIndex: 1,
	image: ""
}

var question2 = {
	id: "q2",
	questionText: "Which body of water was the home to a certain aquatic monster?",
	answers: ["Green Lagoon", 
				"Blue Lagoon",
				"Black Lagoon",
				"Red Sea"],
	correctAnswerIndex: 2,
	image: ""
}

var question3 = {
	id: "q3",
	questionText: "What giant animal menaced the Nautilus?",
	answers: ["Aardvark", 
				"Sea sponge",
				"Otter",
				"Squid"],
	correctAnswerIndex: 3,
	image: ""
}

var question4 = {
	id: "q4",
	questionText: "What normal sized animal was the title of an Alfred Hitchcock horror movie?",
	answers: ["Birds", 
				"Bees",
				"Ants",
				"Rats"],
	correctAnswerIndex: 0,
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
	unanswered: 0,
	timeRemaining: 30,
	questions: [],
	intervalID: "",
	timeoutID: "",

	initGame: function() {
		$("#display-area").empty();
		this.correct = 0;
		this.incorrect = 0;
		this.unanswered = 0;
		this.timeRemaining = 30;
		this.questions = Object.create(questions);
		questions.map(this.displayQuestion);
		this.displayDoneButton();
		this.startDoneButtonListener();
		this.startTimer();

	},

	displayDoneButton: function() {
		var button = $("<button>").attr("type", "button").addClass("btn btn-warning").text("Done");
		$("#display-area").append(button);

	},

	startDoneButtonListener: function() {
		$("button").on("click", this.evaluateAnswers);

	},

	startTimer: function() {
		var timer = $("#timer");
		timer.text(this.timeRemaining.toString());
		this.intervalID = setInterval(function() {
			Game.timeRemaining--;
			timer.text(Game.timeRemaining.toString());
			if(Game.timeRemaining === 0) {
				timer.text("0");
				clearInterval(this.intervalID);
			}
		}, 1000);
		this.timeoutID = setTimeout(this.evaluateAnswers, this.timeRemaining * 1000);
	},

	displayQuestion: function(question) {
		var qHTML = $("<div>").addClass("question").attr("id", question.id).data("correct", question.correctAnswerIndex);
		qHTML.append($("<h2>").text(question.questionText));
		var form = $("<form>");
		qHTML.append(form);
		for (var i = 0; i < question.answers.length; i++) {
			var label = $("<label>").addClass("radio-inline").append(question.answers[i]);
			form.append(label);
			var choice = $("<input>").attr("type", "radio").attr("name", "opt").data("choice", i);
			label.prepend(choice);
		}
		var display = $("#display-area");
		display.append(qHTML);
	},

	evaluateAnswers: function() {
		clearTimeout(Game.timeoutID);
		clearInterval(Game.intervalID);
		var divs = $(".question");
		divs.map(function(div) {
			var correctAnswer = $(this).data("correct");
			var choice = $(this).find("input:checked").data("choice");
			if(correctAnswer === choice) {
				Game.correct++;
			}
			else if(typeof choice != "undefined") {
				Game.incorrect++;
			}
			else {
				Game.unanswered++;
			}
		});
		Game.displayResults();
	},

	displayResults: function() {
		var display = $("#display-area");
		display.empty();
		display.append($("<p>").text("Number correct: " + this.correct));
		display.append($("<p>").text("Number incorrect: " + this.incorrect));
		display.append($("<p>").text("Number unanswered: " + this.unanswered));
	}
}

$("#start-button").on("click", function() {
	Game.initGame();
});