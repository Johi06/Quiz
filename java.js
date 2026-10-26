let score = 0; 
let currentQuestionIndex = 0; 

let questions = [

    question = {
    question: "Was ist die Hauptstadt von Vorarlberg?",
    answers: ["Paris","London","Bregenz","Hohenems"],
    correctAnswer: 2
    },

    question = {
    question: "Wer ist der Landeshauptmann von Vorarlerg",
    answers: ["Markus Wallner","Harald Sonderegger","Alexander Van der Bellen","Donald Trump"],
    correctAnswer: 0
    },

    question = {
    question: "Was ist kein Bezirk in Vorarlberg",
    answers: ["Bludenz","Feldkirch","Dornbirn","Montafon"],
    correctAnswer: 3
    },
]
function displayQuestion(){

    if(currentQuestionIndex >= questions.length){

        document.getElementById('quiz-container').hidden = true;
        document.getElementById('result').hidden = false;
        document.getElementById('score').textContent = score;
        return;
    }

    let question = questions[currentQuestionIndex];

    document.getElementById('question').textContent = question.question;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement('button');
        answerButton.classList.add("btn-solid", "theme-primary", "me-4");
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(index);
        answersDiv.appendChild(answerButton);
    });
}

displayQuestion();

function checkAnswer(userAnswer){
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if(userAnswer == correctAnswer){
        score += 1;
    }

    nextQuestion();
}

function nextQuestion(){
    currentQuestionIndex +=1;
    displayQuestion();
}

