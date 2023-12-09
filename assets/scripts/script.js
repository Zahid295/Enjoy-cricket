/*jshint esversion: 6 */

// Import Array for questions and choices from questions_Options.js
import { questions_Options } from './cricketObjects.js';

// Retrieving html elements in variables
const quizBox = document.getElementById("main-box");
const quizQuestions = document.getElementById("questions");
const quizChoices = document.getElementById("choices");
const nextButton = document.getElementById("next-button");
const quizScore = document.getElementById("quiz-score");
const Alert = document.querySelector(".alert");
const startButton = document.querySelector(".start");
const emptyBox = document.querySelector(".empty-box");


// Variable to keep array current
let initialQuestion = 0;
let score = 0;
let quizFinish = false;
// Function to test correct and wrong answers
function testAnswer() {
    const selectedOption = document.querySelector('.option.selected');
    if (selectedOption.textContent === questions_Options[initialQuestion].correct_option) {

        showAlert("Correct Answer");
        score++;

    } else {

        showAlert(`Wrong Answer! ${questions_Options[initialQuestion].correct_option} is Correct Answer`);
    }
    initialQuestion++;
    if (initialQuestion < questions_Options.length) {
        displayQuestions();

    } else {

        quizscore();
        quizFinish = true;
    }
}
// Function to display score
function quizscore() {
    quizQuestions.textContent = "";
    quizChoices.textContent = "";
    quizScore.textContent = `You scored ${score} out of ${questions_Options.length}`;
    showAlert("Your quiz has Ended");
    nextButton.textContent = "Play Again";

}
// Function to show alerts
function showAlert(message) {
    Alert.style.visibility = "visible";
    Alert.textContent = message;
    setTimeout(() => {
        Alert.style.visibility = "hidden";
    }, 2000);
}

// Function to Click on play quiz button

startButton.addEventListener('click', function () {
    startButton.style.display = "none";
    quizBox.style.display = "block";
    emptyBox.style.display = "none";
    displayQuestions();
});


// Add EventListner for next button

nextButton.addEventListener('click', function () {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption && nextButton.textContent === "Next") {

        showAlert("Select your Answer");
        return;
    }
    if (quizFinish) {
        nextButton.textContent = "Next";
        quizScore.textContent = "";
        initialQuestion = 0;
        displayQuestions();

        quizFinish = false;
        score = 0;
    } else {
        testAnswer();
    }

});

// Function to show questions and options
function displayQuestions() {
    const questionItem = questions_Options[initialQuestion];
    quizQuestions.textContent = questionItem.ques;
    quizChoices.textContent = "";
    for (let i = 0; i < questionItem.opts.length; i++) {
        const currentOption = questionItem.opts[i];
        const optiondiv = document.createElement('div');
        optiondiv.textContent = currentOption;
        optiondiv.classList.add("option");
        quizChoices.appendChild(optiondiv);

        optiondiv.addEventListener('click', function () {
            const optionSelected = document.querySelectorAll('.option');
            optionSelected.forEach(function(option) {
                option.classList.remove('selected');
            }); 
            
            optiondiv.classList.add('selected');
        });
    }

}