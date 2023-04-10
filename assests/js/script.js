var startClick = document.getElementById("start");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("quesBox");
var ansBoxEl = document.getElementsByClassName("ansBox");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var responseEl = document.getElementById("response");

var currentQuestionIndex;

function countdown () {
    var timeLeft = 60;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = 'Timer: ' + timeLeft;
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = 'Timer: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            endScreen();
        }
    }, 1000)
};

//on button click
startClick.addEventListener('click', beginQuiz);
//start quiz
function beginQuiz() {
    //start timer
    countdown();
    //display first question
    nextQuestion();
};

function nextQuestion() {

};

function selectAnswer () {};
//on question answer
//1. confirm correct or incorrect
//  - on question correct highlight green
//  - on question incorrect highlight red
//2. change question

//repeat until last question
//time penalty? 6s

//on answered last question or timer 0
//end quiz
//change page to show results
//enter initials to save data

//show save data on highscore board
//show options to return to main menu or play again

//how many questions? 10
var questions = [
    {
        question: 'Approximately how many moons does it take to reach the sun?',
        answers: [
            {ans1: '43109.17', correct: true},
            {ans2: '49301.71', correct: false},
            {ans3: '53109.17', correct: false},
            {ans4: '59301.71', correct: false}
        ]
    },
    {
        question: 'What color is the sun?',
        answers: [
            {ans1: 'White', correct: true},
            {ans2: 'Green', correct: false},
            {ans3: 'Yellow', correct: false},
            {ans4: 'Red', correct: false}
        ]
    },
    {
        question: 'White is the color commonly attributed to lightning. What popular animated series features a lightning based character?',
        answers: [
            {ans1: 'Avatar: The Last Airbender', correct: false},
            {ans2: 'Transformers', correct: false},
            {ans3: 'Adventure Time', correct: false},
            {ans4: 'Pokemon', correct: true}
        ]
    },
    {
        question: "What is Jung's favorite variable?",
        answers: [
            {ans1: 'Chicken Nuggies', correct: false},
            {ans2: 'Pikachu', correct: true},
            {ans3: 'A Students Name', correct: false},
            {ans4: 'Mayonnaise', correct: false}
        ]
    },
    {
        question: 'How many chicken nuggies does it take to fill a pool if the pool was 10ftx50ftx8ft?',
        answers: [
            {ans1: '20436.2', correct: false},
            {ans2: '23952.1', correct: true},
            {ans3: '25064.7', correct: false},
            {ans4: '28993.3', correct: false},
        ]
    },
    {
        question: 'Water is very healthy. How much have you had today?',
        answers: [
            {ans1: 'None at All', correct: false},
            {ans2: 'Not Enough', correct: true},
            {ans3: 'Enough', correct: false},
            {ans4: 'Plenty', correct: false},
        ]
    },
    {
        question: 'What is the main ingredient in Walmart Carrot Cake?',
        answers: [
            {ans1: 'Water', correct: false},
            {ans2: 'Carrots', correct: false},
            {ans3: 'Sugar', correct: true},
            {ans4: 'Chicken', correct: false},
        ]
    },
    {
        question: 'Make the following sentence make sense: This webpage is getting a(n) ___ as a grade.',
        answers: [
            {ans1: '0%', correct: false},
            {ans2: '30%', correct: false},
            {ans3: '70%', correct: false},
            {ans4: '100%', correct: true},
        ]
    },
    {
        question: 'Who is the fairest of them all?',
        answers: [
            {ans1: 'Cindarella', correct: false},
            {ans2: 'Rapunzel', correct: false},
            {ans3: 'Snow White', correct: true},
            {ans4: 'The 7 Dwarfs', correct: false},
        ]
    },
    {
        question: 'Is this the final question?',
        answers: [
            {ans1: 'Yes', correct: false},
            {ans2: 'No', correct: true},
            {ans3: 'Chicken Nuggies', correct: false},
            {ans4: 'Maybe', correct: false},
        ]
    }
]