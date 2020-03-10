//Variables

//Questions/Answers from https://youteam.io/blog/top-10-javascript-interview-questions-answers/
var quizQuestions = ["What is javascript?", "What is the proper syntax for an arrow function?", "What is a prompt box?",
    "What does the keyword 'this' mean in javascript?", "What symbol should be used for comments in javascript?",
    "What are the looping structures in javascript?", "When do you use escape characters?",
    "How do you link a html document to a javascript script?", "What does the unshift method do?",
    "What does the push method do?"];
var quizAnswers = [
    "An object-oriented programming language.", "A descendant of java.",
    "A combination of html & css.", "A markup language.",

    "() => { };", "function -> { }",
    "event arrowFunction { }", "(argument), => { };",

    "An input box that removes control from the user.", "An input box.",
    "A prompt that offers a yes/no input.", "A box that is never late.",

    "'This' refers to the object where it was called.", "The current function.",
    "A reference to the current javascript script.", "A new variable.",

    "// for single line and /* for multi-line.", "<!--",
    "```", "/",

    "For, while, do-while.", "For, if then, while.",
    "For each, return.", "Iterator, for, while.",

    "When working with single/double quotes, apostrophes & ampersands.", "When we need to escape the current loop.",
    "To leave the vim.", "When calling the escape key.",

    "<script src='script.js'></script>", "<script href='script.js'",
    "<div src='script.js'>", "<link src='script'>",

    "Attaches a new element to the beginning of the array.", "Removes the first array entry.",
    "Detects when the shift key is pressed.", "Shifts an array of elements down by 1.",

    "Attaches a new element to the end of the array.", "Creates a new element in the dom.",
    "Renames an array.", "Adds an element in the middle of an array."

];
var correctAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var currentQuestion = 0;

var startButton = document.getElementById("startButton");
var startScreen = document.getElementById("startScreen");
var quizScreen = document.getElementById("quizScreen");
var quizDisplay = document.getElementById("quizQuestion");
var scoreScreen = document.getElementById("highScore");
var quizA1 = document.getElementById("quizAnswer1");
var quizA2 = document.getElementById("quizAnswer2");
var quizA3 = document.getElementById("quizAnswer3");
var quizA4 = document.getElementById("quizAnswer4");
var exitBtn = document.getElementById("exitButton");
var subBtn = document.getElementById("subBtn");
//Event Listeners

var correctNum = 0;
var incorrectNum = 0;
var timer = 0;

subBtn.addEventListener("click", (event) => {
    event.preventDefault();
    $('.modalElement').modal('toggle');
})

exitBtn.addEventListener("click", () => {
    scoreScreen.style.display = "none";
    startScreen.style.display = "flex";
})

startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    quizScreen.style.display = "flex";
    gettinQuizzy(0);
});

function gettinQuizzy(questionNo) {
    quizDisplay.innerText = quizQuestions[questionNo];
    quizA1.innerText = quizAnswers[questionNo * 4];
    quizA2.innerText = quizAnswers[questionNo * 4 + 1];
    quizA3.innerText = quizAnswers[questionNo * 4 + 2];
    quizA4.innerText = quizAnswers[questionNo * 4 + 3];
}

quizA1.addEventListener("click", () => {
questionAnswered(0);
});

quizA2.addEventListener("click", () => {
        questionAnswered(1);
        });

quizA3.addEventListener("click", () => {
    questionAnswered(2);
    });

quizA4.addEventListener("click", () => {
    questionAnswered(3);
});

function questionAnswered (buttonNumber) {
    if (correctAnswers[currentQuestion] == buttonNumber) {
        correctNum++;
    } else {
        incorrectNum++;
    }
    questionCycle();
}



function questionCycle () {
    if (currentQuestion < correctAnswers.length - 1) {
    currentQuestion++;
    gettinQuizzy(currentQuestion);
    } else {
        $('.modalElement').modal('toggle');
        console.log("display score");
        quizScreen.style.display = "none";
        scoreScreen.style.display = "block";
    }
}

