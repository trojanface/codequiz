var startButton = document.getElementById("startButton");
var startScreen = document.getElementById("startScreen");
var quizScreen = document.getElementById("quizScreen");
startButton.addEventListener("click", () => {
startScreen.style.display = "none";
quizScreen.style.display = "flex";
});