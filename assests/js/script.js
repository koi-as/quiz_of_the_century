// quiz logic // * - -   *   * - * *   - * - *   - - -   - -   * //
var startMenu = $(".startMenu");
var questionMenu = $ (".questionMenu");
var startClick = $("#start");
var timerEl = $("#timer");
var questionEl = $("#quesBox");
var ansBoxEl = $(".ansBox");
var btnEl = $(".button");
var ans1 = $("#ans1");
var ans2 = $("#ans2");
var ans3 = $("#ans3");
var ans4 = $("#ans4");
var responseEl = $("#response");
var inputEl = $("#initials")

var index = 0;

function countdown () {
    var timeLeft = 90;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.text('Timer: ' + timeLeft);
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.text('Timer: ' + timeLeft);
            timeLeft--;
        } else {
            timerEl.text('');
            clearInterval(timeInterval);
            endScreen();
        }
    }, 1000)

    if(timeLeft < 0) {
        timeLeft = 0;
        endScreen();
    }
};

//on button click
startClick.on('click', beginQuiz);
//start quiz
function beginQuiz() {
    //start timer
    countdown();
    //display first question
    nextQuestion();
    startMenu.attr('data-state', 'hide');
    questionMenu.attr('data-state', 'show');
};

function nextQuestion() {
    if(index < 10) {
        showQuestion();
        index++;
    } else {
        endScreen();
    }
};

function showQuestion() {
    questionEl.text(questions[index].question);
    ans1.text(questions[index].answers[0]);
    ans2.text(questions[index].answers[1]);
    ans3.text(questions[index].answers[2]);
    ans4.text(questions[index].answers[3]);
    selectAnswer();
}

//on question answer
//1. confirm correct or incorrect
function selectAnswer () {

        //  - on question correct respond 'correct'
        //  - on question incorrect respond 'wrong'
    //2. change question
};

//repeat until last question
//time penalty? 6s

function endScreen() {
    questionEl.text('Congratulations! You finished the quiz! Type your initials below to save your score!');
    questionMenu.attr('data-state', 'hide');
    //enter initials to save data
    inputEl.attr('data-state', 'show');
//on answered last question or timer 0
//end quiz
//change page to show results

};

//how many questions? 10
var questions = [
    {
        question: 'Approximately how many moons does it take to reach the sun?',
        answers: [
            '43109.17', //correct
            '49301.71',
            '53109.17',
            '59301.71'
        ],
        correct: '43109.17'
    },
    {
        question: 'What color is the sun?',
        answers: [
            'White', //correct
            'Green',
            'Yellow',
            'Red'
        ],
        correct: 'White'
    },
    {
        question: 'White is the color commonly attributed to lightning. What popular animated series features a lightning based character?',
        answers: [
            'Avatar: The Last Airbender',
            'Transformers', 
            'Adventure Time',
            'Pokemon' //correct
        ],
        correct: 'Pokemon'
    },
    {
        question: "What is Jung's favorite variable?",
        answers: [
            'Chicken Nuggies',
            'Pikachu', //correct
            'A Students Name', 
            'Mayonnaise'
        ],
        correct: 'Pikachu'
    },
    {
        question: 'How many chicken nuggies does it take to fill a pool if the pool was 10ftx50ftx8ft?',
        answers: [
            '20436.2',
            '23952.1', //correct
            '25064.7',
            '28993.3'
        ],
        correct: '23952.1'
    },
    {
        question: 'Water is very healthy. How much have you had today?',
        answers: [
            'None at All',
            'Not Enough', //correct
            'Enough',
            'Plenty'
        ],
        correct: 'Not Enough'
    },
    {
        question: 'What is the main ingredient in Walmart Carrot Cake?',
        answers: [
            'Water',
            'Carrots',
            'Sugar', //correct
            'Chicken'
        ],
        correct: 'Sugar'
    },
    {
        question: 'Make the following sentence make sense: This webpage is getting a(n) ___ as a grade.',
        answers: [
            '0%',
            '30%',
            '70%',
            '100%' //correct
        ],
        correct: '100%'
    },
    {
        question: 'Who is the fairest of them all?',
        answers: [
            'Cindarella',
            'Rapunzel',
            'Snow White', //correct
            'The 7 Dwarfs'
        ],
        correct: 'Snow White'
    },
    {
        question: 'Is this the final question?',
        answers: [
            'Yes',
            'No', //correct
            'Chicken Nuggies',
            'Maybe',
        ],
        correct: 'No'
    }
];

// scoreboard script // * * * *   * * / -   * * * *   *   * - *   * //

var returnBtn = $('#returnBtn')
var clearBtn = $('#clearBtn')
var lbEl = $('.leaderboard')
//show save data on highscore board
function highscoreSave () {
    saveData.text(inputEl + ': ' + timeLeft)
};
//show options to return to main menu or play again
returnBtn.on('click', function () {
    window.location.href='./index.html'
});

clearBtn.on('click', function () {
    lbEl.children().remove()
});
