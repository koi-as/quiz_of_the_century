var startClick = document.getElementById("start");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("quesBox");
var ansBoxEl = document.getElementsByClassName("ansBox");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var responseEl = document.getElementById("response");

//on button click
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
}

function beginQuiz() {
    var responseTime = 5;

    var responseInterval = setInterval(function() {
        if (responseTime > 1) {
        }
    })
    questionEl.textContent = "Quiz About To Begin!";
    ans1.textContent = '';
    ans2.textContent = '';
    ans3.textContent = '';
    ans4.textContent = '';
    var responseInterval = setInterval(function() {
        if (responseTime >= 1) {
            responseEl.textContent = "...in " + responseTime;
            responseTime--;
        } else {
            responseEl.textContent = 'Go!';
            clearInterval(responseInterval);
        }
    }, 1000)
}

beginQuiz();
countdown ();
//start quiz
//1. change page
//2. start timer
console.log(countdown);
//3. display first question

//questions
//1. How many moons does it take to reach the sun? a: 43109.17
function question1() {
    questionEl.textContent = 'Approximately how many moons does it take to reach the sun?';
    ans1.textContent = '43109.17';
    ans2.textContent = '49301.71';
    ans3.textContent = '53109.17';
    ans4.textContent = '59301.71';
    if (ans1 === true) {
        ansBoxEl.addEventListener("click", function() {
        });
    }
};
question1();
//2. What color is the sun? a: white
ansBoxEl.addEventListener("click", function() {
    questionEl.textContent = 'What color is the sun?';
    ans1.textContent = 'White';
    ans2.textContent = 'Green';
    ans3.textContent = 'Yellow';
    ans4.textContent = 'Red';
});
//3. White is the color commonly attributed to lightning. What popular animated series features a lightning based character? a: Pokemon
ansBoxEl.addEventListener("click", function() {
    questionEl.textContent = 'White is the color commonly attributed to lightning. What popular animated series features a lightning based character?';
    ans1.textContent = 'Avatar: The Last Airbender';
    ans2.textContent = 'Transformers';
    ans3.textContent = 'Adventure Time';
    ans4.textContent = 'Pokemon';
});
//4. What is Jung's favorite variable? a: Pikachu
    ansBoxEl.addEventListener("click", function() {
    questionEl.textContent = "What is Jung's favorite variable?";
    ans1.textContent = 'Chicken Nuggies';
    ans2.textContent = 'Pikachu';
    ans3.textContent = 'A Students Name';
    ans4.textContent = 'Mayonnaise';
});
//5. How many chicken nuggies does it take to fill a pool if the pool was 10ftx50ftx8ft? a: Approxamitely 23952.1
ansBoxEl.addEventListener("click", function() {
    questionEl.textContent = 'How many chicken nuggies does it take to fill a pool if the pool was 10ftx50ftx8ft?';
    ans1.textContent = '20436.2';
    ans2.textContent = '23952.1';
    ans3.textContent = '25064.7';
    ans4.textContent = '28993.3';
});
//6. Water is very healthy. How much have you had today? a: Not enough
ansBoxEl.addEventListener("click", function() {
    questionEl.textContent = 'Water is very healthy. How much have you had today?';
    ans1.textContent = 'None at All';
    ans2.textContent = 'Not Enough';
    ans3.textContent = 'Enough';
    ans4.textContent = 'Plenty';
});
//7. What is the main ingredient in Walmart Carrot Cake? a: sugar
ansBoxEl.addEventListener("click", function() {
    questionEl.textContent = 'What is the main ingredient in Walmart Carrot Cake?';
    ans1.textContent = 'Water';
    ans2.textContent = 'Carrots';
    ans3.textContent = 'Sugar';
    ans4.textContent = 'Chicken';
});
//8. Make the following sentence make sense: This webpage is getting a(n) ___ as a grade. a: 100%
ansBoxEl.addEventListener("click", function() {
    questionEl.textContent = 'Make the following sentence make sense: This webpage is getting a(n) ___ as a grade.';
    ans1.textContent = '0%';
    ans2.textContent = '30%';
    ans3.textContent = '70%';
    ans4.textContent = '100%';
});
//9. Who is the fairest of them all? a: Snow White
ansBoxEl.addEventListener("click", function() {
    questionEl.textContent = 'Who is the fairest of them all?';
    ans1.textContent = 'Cindarella';
    ans2.textContent = 'Rapunzel';
    ans3.textContent = 'Snow White';
    ans4.textContent = '';
});
//10. Is this the final question? a: No
ansBoxEl.addEventListener("click", function() {
    questionEl.textContent = 'Is this the final question?';
    ans1.textContent = 'Yes';
    ans2.textContent = 'No';
    ans3.textContent = 'Chicken Nuggies';
    ans4.textContent = 'Maybe';
});

//on question answer
//1. confirm correct or incorrect
//  - on question correct highlight green
//  - on question incorrect highlight red
//2. change question

//repeat until last question
//how many questions? 10
//time penalty? 6s

//on answered last question or timer 0
//end quiz
//change page to show results
//enter initials to save data

//show save data on highscore board
//show options to return to main menu or play again