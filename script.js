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
const alert = document.getElementById("display-alert");
const startButton = document.getElementById("start-button");
// Variable to keep array current
let initialQuestion = 0; 

// Add EventListner for next button
displayQuestions();
nextButton.addEventListener('click', function() {
    if (initialQuestion < questions_Options.length) {
        initialQuestion++;
        displayQuestions();
    }
})

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
    }

}




    
