//Variables
var startButton = document.getElementById("startButton");
var startScreen = document.getElementById("startScreen");
var quizScreen = document.getElementById("quizScreen");
var quizQuestions = ["What is javascript?", "What is the proper syntax for an arrow function?", "What is a prompt box?", 
"What does the keyword 'this' mean in javascript?", "What symbol should be used for comments in javascript?", 
"What are the looping structures in javascript?", "When do you use escape characters?", 
"How do you link a html document to a javascript script?", "What does the unshift method do?", 
"What does the push method do?"];
var quizAnswers = [
"An object-oriented programming language.", "A descendant of java.",
"A combination of html & css.", "A markup language.",

"() => { };", "function -> { }"
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
var correctAnswers = [0,0,0,0,0,0,0,0,0,0,0];


//Event Listeners

startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    quizScreen.style.display = "flex";
});