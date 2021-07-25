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
    question: "What colors is associated with the earth?",
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
    choice3: "purple",
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
