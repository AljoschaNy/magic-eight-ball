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

function switchMainArea() {
    if(question.innerHTML === questionOrigin) {
        userInput.style.display = 'block';
        fortune.style.display = 'none';
    } else {
        userInput.style.display = 'none';
        fortune.style.display = 'block';
    }
};

// Switch question view and fortune view
button.addEventListener('click', function(){
    switchQuestion();
    switchButtonText();
    resetUserInput();
    switchMainArea();

    fortune.innerHTML = Fortune.getFortune();
});

// Fortune object to switch fortunes
let Fortune = {
    eightBall: '',
    switchFortune(){
        let randomNumber = Math.floor(Math.random()*8);
    
        switch(randomNumber) {
            case 0:
                eightBall = 'It is certain';
                break;
            case 1:
                eightBall = 'It is decidedly so';
                break;
            case 2:
                eightBall = 'Reply hazy try again';
                break;
            case 3:
                eightBall = 'Cannot predict now';
                break;
            case 4:
                eightBall = 'Do not count on it';
                break;
            case 5:
                eightBall = 'My sources say no';
                break;
            case 6:
                eightBall = 'Outlook not so good';
                break;
            case 7:
                eightBall = 'Signs point to yes';
                break;
            default:
                break;
        }
    },
    getFortune() {
        this.switchFortune();
        return eightBall;
    }
};