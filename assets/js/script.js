// Elements from index.html
const quizClock = document.getElementById("clock");
const startQuizDiv = document.getElementById("homePage");
const quizBody = document.getElementById("quizPage");
const scoreDiv = document.getElementById("scorePage");
const questionsEl = document.getElementById("questions");
const resultsEl = document.getElementById("results");
const totalScoreEl = document.getElementById("totalScore");
const gameoverDiv = document.getElementById("gameOver");
const startQuizButton = document.getElementById("startBTN");
const submitScoreBtn = document.getElementById("submitScore");
const highScoreButton = document.getElementById("highBTN");
const endGameBtns = document.getElementById("endGameBtns");
const highscoreContainer = document.getElementById("scoreContainer");
const displayScore = document.getElementById("highscore");
const displayName = document.getElementById("highscore-name");
const inputName = document.getElementById("name");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");

//Questions to pull from for quiz
const quizQuestions = [{
    question: "What color is associated with a fire truck?",
    choice1: "Yellow",
    choice2: "Rainbow",
    choice3: "Red",
    choice4: "Orange",
    correctAnswer: "3"
},
{
    question: "What colors are associated with the NY Jets?",
    choice1: "White/Blue",
    choice2: "White/Green",
    choice3: "White/Black",
    choice4: "White/Red",
    correctAnswer: "2"
},
{
    question: "What colors are associated with the earth?",
    choice1: "Blue",
    choice2: "Green",
    choice3: "Blue/green",
    choice4: "Blue/white",
    correctAnswer: "3"
},
{
    question: "Which color is a primary color?",
    choice1: "Yellow",
    choice2: "Green",
    choice3: "Purple",
    choice4: "Orange",
    correctAnswer: "1"
},
{
    question: "What color is a complimentary color to yellow?",
    choice1: "Yellow",
    choice2: "Purple",
    choice3: "Black",
    choice4: "Green",
    correctAnswer: "2"
},
];

var questionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 70;
var timerInterval;
var score = 0;
var correct;


function startQuiz() {
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();
    timerInterval = setInterval(function () {
        timeLeft--;
        quizClock.textContent = "Time left: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
    quizBody.style.display = "block";
}

function generateQuizQuestion() {
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === questionIndex) {
        return showScore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    button1.innerHTML = currentQuestion.choice1;
    button2.innerHTML = currentQuestion.choice2;
    button3.innerHTML = currentQuestion.choice3;
    button4.innerHTML = currentQuestion.choice4;
};

function showScore() {
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    inputName.value = "";
    totalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

submitScoreBtn.addEventListener("click", function highscore() {
    if (inputName.value === "") {
        alert("Input field cannot be blank");
        return false;
    } else {
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = inputName.value.trim();
        var currentHighscore = {
            name: currentUser,
            score: score
        };
        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        scoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";

        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();
    }
});

function generateHighscores() {
    displayName.innerHTML = "";
    displayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i = 0; i < highscores.length; i++) {
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        displayName.appendChild(newNameSpan);
        displayScore.appendChild(newScoreSpan);
    }
}

function showHighscore() {
    startQuizDiv.style.display = "none"
    gameoverDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    scoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";
    generateHighscores();
}

function clearScore() {
    window.localStorage.clear();
    displayName.textContent = "";
    displayScore.textContent = "";
}

function replayQuiz() {
    highscoreContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 76;
    score = 0;
    currentQuestionIndex = 0;
}

function checkAnswer(answer) {
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== questionIndex) {
        score++;
        currentQuestionIndex++;
        generateQuizQuestion();
    } 
    else if (answer !== correct && currentQuestionIndex !== questionIndex) {
        timeLeft = timeLeft - 10;
        currentQuestionIndex++;
        generateQuizQuestion();
    } 
    else {
        showScore();
    }
}

startQuizButton.addEventListener("click", startQuiz);
highScoreButton.addEventListener("click", showHighscore);