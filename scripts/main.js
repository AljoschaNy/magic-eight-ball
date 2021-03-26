import Fortune from './includes/fortune';

const questionOrigin = "What is your question?";
const buttonOrigin = "Show Fortune";

let question = document.getElementById('question');
let button = document.getElementById('fortuneBtn');
let userInput = document.getElementById('userInput');
let fortune = document.getElementById('fortune');

function switchQuestion() {
    if(question.innerHTML === questionOrigin) {
        // Move userInput into question bar
        question.innerHTML = userInput.value;
    } else {
        question.innerHTML = questionOrigin;
    }
};

function switchButtonText() {
    if(button.innerHTML === buttonOrigin) {
        button.innerHTML = 'Another question';
    } else {
        button.innerHTML = buttonOrigin;
    }
};

function resetUserInput() {
    if(userInput.value) {
        userInput.value = '';
    }
};


// Switch question view and fortune view
button.addEventListener('click', function(){
    // if textarea empty show textarea
    if(!userInput.value) {
        userInput.style.display = 'block';
        fortune.style.display = 'none';
        // Reset button and question texts to default
        if(button.innerHTML !== buttonOrigin) {
            switchQuestion();
            switchButtonText();
        }
    //if textarea not empty show fortune paragraph
    } else {
        userInput.style.display = 'none';
        fortune.style.display = 'block';
        switchQuestion();
        switchButtonText();
        resetUserInput();
        fortune.innerHTML = Fortune.getFortune();
    }  
});
