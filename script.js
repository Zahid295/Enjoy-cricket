 //Array for questions and choices 
  
const questions_Options = [
    {
        ques: "What is the biggest capacity cricket ground in England?",
        opts: ["The Oval", "Rose Bowl", "Lords", "Old Trafford"],
        correct_option: "Lords",
    },
    {
        ques: "Who is the highest run-scorer of all time in International cricket?",
        opts: ["Ricky Pointing", "Virat Kohli", "Keith Fletcher", "Sachin Tendulkar"],
        correct_option: "Sachin Tendulkar",
    },
    {
        ques: " Who did England beat in the final of the 2019 Cricket World Cup? ",
        opts: ["New Zealand", "Australia", "India", "Japan "],
        correct_option: "New Zealand",
    },
    {
        ques: "Where will the 2023 Cricket World Cup be hosted?",
        opts: ["Pakistan", "India", "England", "Ireland "],
        correct_option: "India",
    },
    {
        ques: "What is the highest first innings score in test cricket?",
        opts: ["903", "803", "1000", "602"],
        correct_option: "903", 
    }
];

// Retrieving html elements in variables
const quizBox = document.getElementById("main-box");
const quizQuestions = document.getElementById("questions");
const quizChoices = document.getElementById("choices");
const nextButton = document.getElementById("next-button");
const quizScore = document.getElementById("quiz-score");
const alert = document.querySelector(".alert");
const startButton = document.querySelector(".start");

// Variable to keep array current
let initialQuestion = 0;
let score = 0;
let quizFinish = false;
// Function to test correct and wrong answers
function testAnswer() {
    const selectedOption = document.querySelector('.option.selected');
    if (selectedOption.textContent === questions_Options[initialQuestion].correct_option){
        
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
    alert.style.display = "block";
    alert.textContent = message;
    setTimeout(() => {
        alert.style.display = "none";
    }, 2000);
}
  

// Add EventListner for next button
displayQuestions();
nextButton.addEventListener('click', function() {
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
    }
    else {
        testAnswer();
    }
    testAnswer();
      
});

// Function to show questions and options
function displayQuestions() {
    const questionItem = questions_Options[initialQuestion];
    quizQuestions.textContent = questionItem.ques;
    quizChoices.textContent = "";
    for (i = 0; i < questionItem.opts.length; i++) {
        const currentOption = questionItem.opts[i];
        const optiondiv = document.createElement('div');
        optiondiv.textContent = currentOption;
        optiondiv.classList.add("option");
        quizChoices.appendChild(optiondiv);

        optiondiv.addEventListener('click', function() {
              if (optiondiv.classList.contains('selected')) {
                optiondiv.classList.remove('selected')
              } else {
                optiondiv.classList.add('selected')
              }
        });
    }

}




    
