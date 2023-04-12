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

var timeInterval;

var index = 0;
var timeLeft = 90;

//on button click
startClick.on('click', beginQuiz);
//start quiz
function beginQuiz() {
    //start timer
    timeInterval = setInterval(function() {
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
    //display first question
    nextQuestion();
    startMenu.attr('data-state', 'hide');
    questionMenu.attr('data-state', 'show');
};

function nextQuestion() {
    if(index < 10) {
        showQuestion();
        index++;
    } else if (index >= 10){
        endScreen();
        return;
    }
};

function showQuestion() {
    questionEl.text(questions[index].question);
    ans1.text(questions[index].answers[0]);
    ans2.text(questions[index].answers[1]);
    ans3.text(questions[index].answers[2]);
    ans4.text(questions[index].answers[3]);
    btnEl.on('click', selectAnswer)
}

//on question answer
//1. confirm correct or incorrect
function selectAnswer () {
    if(ans1.value && ans2.value && ans3.value && ans4.value !== questions[index].correct) {
        timeLeft -= 10;
        nextQuestion();
        //  - on question incorrect respond 'wrong'
        responseEl.text('wrong');
        return;
    } else {
        nextQuestion();
        //  - on question correct respond 'correct'
        responseEl.text('correct');
    }
};

//on answered last question or timer 0
//end quiz
function endScreen() {
    clearInterval(timeInterval);
    var score = timeLeft;
    questionEl.text('Congratulations! You finished the quiz! Type your initials below to save your score!');
    btnEl.attr('data-state', 'hide');
    responseEl.attr('data-state', 'hide');
    //enter initials to save data
    inputEl.attr('data-state', 'show');
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
            '70%', //correct
            '100%' 
        ],
        correct: '70%'
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
    if(inputEl !== '') {
        var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
    }

    var finalScore = {
        score: timeLeft,
        name: inputEl
    }

    highscores.push(finalScore)
    window.localStorage.setItem('leaderboard', JSON.stringify(highscores));
    window.location.href='./leaderboard.html';
};
//show options to return to main menu or play again
returnBtn.on('click', function () {
    window.location.href='./index.html'
});

clearBtn.on('click', function () {
    lbEl.children().remove()
});
