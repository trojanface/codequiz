//Variables

//Questions/Answers from https://youteam.io/blog/top-10-javascript-interview-questions-answers/
var quizQuestions = ["What is javascript?", "What is the proper syntax for an arrow function?", "What is a prompt box?",
    "What does the keyword 'this' mean in javascript?", "What symbol should be used for comments in javascript?",
    "What are the looping structures in javascript?", "When do you use escape characters?",
    "How do you link a html document to a javascript script?", "What does the unshift method do?",
    "What does the push method do?"];
var quizAnswers = [
    //Question 1 Answers
    "An object-oriented programming language.", "A descendant of java.",
    "A combination of html & css.", "A markup language.",
    //Question 2 Answers
    "() => { };", "function -> { }",
    "event arrowFunction { }", "(argument), => { };",
    //Question 3 Answers
    "An input box that removes control from the user.", "An input box.",
    "A prompt that offers a yes/no input.", "A box that is never late.",
    //Question 4 Answers
    "'This' refers to the object where it was called.", "The current function.",
    "A reference to the current javascript script.", "A new variable.",
    //Question 5 Answers
    "// for single line and /* for multi-line.", "<!--",
    "```", "/",
    //Question 6 Answers
    "For, while, do-while.", "For, if then, while.",
    "For each, return.", "Iterator, for, while.",
    //Question 7 Answers
    "When working with single/double quotes, apostrophes & ampersands.", "When we need to escape the current loop.",
    "To leave the vim.", "When calling the escape key.",
    //Question 8 Answers
    "<script src='script.js'></script>", "<script href='script.js'",
    "<div src='script.js'>", "<link src='script'>",
    //Question 9 Answers
    "Attaches a new element to the beginning of the array.", "Removes the first array entry.",
    "Detects when the shift key is pressed.", "Shifts an array of elements down by 1.",
    //Question 10 Answers
    "Attaches a new element to the end of the array.", "Creates a new element in the dom.",
    "Renames an array.", "Adds an element in the middle of an array."

];
var correctAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //this array stores the index of the correct answer.
var currentQuestion = 0;

//Assigning the dom elements to variables
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
var timerElement = document.getElementById("timerText");
var scoreText = document.getElementById("scoreText");
var playerName = document.getElementById("playerName");
var listElement = document.getElementById("scoreList");

//Event Listeners
var correctNum = 0;
var incorrectNum = 0;
var timer = 0;
var score = 0;
var savedNames = [];
var savedScores = [];

subBtn.addEventListener("click", (event) => {//When the user submits the highscore form.
    event.preventDefault();
    $('.modalElement').modal('toggle'); //toggle off the highscore form modal
    //add the variables to the saved variables array
    savedNames.push(playerName.value.trim());
    savedScores.push(score);
    //save the variables.
    localStorage.setItem("Names", savedNames);
    localStorage.setItem("Highscores", savedScores);
    scoreDisplay();
});

exitBtn.addEventListener("click", () => { //When the user exits the highscore screen hide it and reopen the start screen.
    var child = listElement.lastElementChild;  //gets the last element in the unordered list element.
    while (child) { //while that elements exists delete it and redeclare the child variable as the new lastchild.
        listElement.removeChild(child);
        child = listElement.lastElementChild;
    }
    scoreScreen.style.display = "none";
    startScreen.style.display = "flex";
});

startButton.addEventListener("click", () => { //The user starts the quiz
    //declare these variables as arrays.
    savedNames = new Array;
    savedScores = new Array;
    //load the data from local storage
    savedScores = localStorage.getItem("Highscores").split(",");
    savedNames = localStorage.getItem("Names").split(",");
    //hide the start screen and display the quiz screen.
    startScreen.style.display = "none";
    quizScreen.style.display = "flex";
    timer = 60;
    score = 0;
    currentQuestion = 0;
    var timerFunc = setInterval(function () { //start the timer
        if (timer > 0 && (currentQuestion < correctAnswers.length - 1)) {
            timer--;
            timerElement.innerText = timer;
        } else {
            currentQuestion = correctAnswers.length;
            questionCycle();
            clearInterval(timerFunc);
        }
    }, 1000);
    gettinQuizzy(0);
});

function scoreDisplay() { //dynamically generate a list of user names and their scores
    if (savedNames != null) {
        for (var i = 0; i < savedNames.length; i++) {
            var itemVar = document.createElement("li");
            itemVar.innerText = savedNames[i] + " : " + savedScores[i];
            listElement.appendChild(itemVar);
        }
    } else {
        console.log("There are no saved scores.");
    }
}

function swapElements(arrayVar, fromVar, toVar) { //swaps two elements in an array
    let tempValue = arrayVar[toVar];
    arrayVar[toVar] = arrayVar[fromVar];
    arrayVar[fromVar] = tempValue;
}

function gettinQuizzy(questionNo) { //loads the quiz questions
    for (var i = 0; i < 40; i++) { //scramble the order of the questions so the first one isn't always right.
        var selectionOne = (currentQuestion * 4) + Math.round(Math.random() * 3);
        var selectionTwo = (currentQuestion * 4) + Math.round(Math.random() * 3);
        if ((selectionTwo - (currentQuestion * 4)) == correctAnswers[currentQuestion]) { //check if selection two has selected the correct answer, if it has then skip this iteration.
            selectionTwo = selectionOne;
        }
        if (selectionOne != selectionTwo) {
            if (selectionOne - (currentQuestion * 4) == correctAnswers[currentQuestion]) { //if the correct answer is being swapped then ensure the value is being recorded correctly in the correct answer array.
                correctAnswers[currentQuestion] = selectionTwo - (currentQuestion * 4);
            }

            swapElements(quizAnswers, selectionOne, selectionTwo);
        }
    }
    //ensure the dom elements contain the new question and answers
    quizDisplay.innerText = quizQuestions[questionNo];
    quizA1.innerText = quizAnswers[questionNo * 4];
    quizA2.innerText = quizAnswers[questionNo * 4 + 1];
    quizA3.innerText = quizAnswers[questionNo * 4 + 2];
    quizA4.innerText = quizAnswers[questionNo * 4 + 3];
}

//when an answer button is pressed pass the number of the button to the answered function.
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

function questionAnswered(buttonNumber) {
    if (correctAnswers[currentQuestion] == buttonNumber) { //checks if the answer is correct.
        correctNum++;
    } else {
        timer -= 10;
        incorrectNum++;
    }
    questionCycle();
}

function questionCycle() { //progresses through the available questions or ends the quiz if you've completed it.
    if (currentQuestion < correctAnswers.length - 1) {
        currentQuestion++;
        gettinQuizzy(currentQuestion); //updates the questions/answers
    } else {
        score = correctNum;
        scoreText.innerText = "Your Score - " + score;
        $(".modalElement").modal("toggle"); //opens the highscore modal (uses jquery as it's a bootstrap modal).
        quizScreen.style.display = "none"; //hides the quiz screen and opens the highscore screen.
        scoreScreen.style.display = "block";
    }
}

