let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },
    {
        "question": "Wie bindet man eine Webseite in eine andere Webseite ein?",
        "answer_1": "&lt;iframe src=\"http://www.example.com\"&gt;",
        "answer_2": "&lt;frame src=\"http://www.example.com\"&gt;",
        "answer_3": "&lt;frameset src=\"http://www.example.com\"&gt;",
        "answer_4": "&lt;ifr src=\"http://www.example.com\"&gt;",
        "right_answer": 1
    },
    {
        "question": "Welches Attribut kann nicht für Textarea verwendet werden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 3
    },
    {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem Attribut title aus?",
        "answer_1": "a[title]",
        "answer_2": "a > title",
        "answer_3": "a.title",
        "answer_4": "a=title",
        "right_answer": 1
    },
    {
        "question": "Wie definierst man in JavaScript eine Variable?",
        "answer_1": "let 100 = myVar",
        "answer_2": "variable myVar",
        "answer_3": "v myVar",
        "answer_4": "let myVar",
        "right_answer": 4
    },
    {
        "question": "Was ist kein JavaScript Framework?",
        "answer_1": "Python Script",
        "answer_2": "JQuery",
        "answer_3": "Node.js",
        "answer_4": "Django",
        "right_answer": 1
    },
];

let currentQuestion = 0;
let rightAnswers = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
};

function showQuestion() {

    if(currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';

        document.getElementById('amount-Of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-answers').innerHTML = rightAnswers;
        document.getElementById('header-image').src = 'img/win.webp';

    } else {

        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;
        console.log('Fotschritt: ', percent);

    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question.answer_1;
    document.getElementById('answer_2').innerHTML = question.answer_2;
    document.getElementById('answer_3').innerHTML = question.answer_3;
    document.getElementById('answer_4').innerHTML = question.answer_4;
    }
};

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is: ', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is: ', selectedQuestionNumber);
    console.log('Current question is: ', question['right_answer']);
    
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightAnswers++;
    }else { 
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        console.log('Falsche Antwort');
    }
    document.getElementById('next-button').disabled = false;   
}

function nextQuestion(){
    currentQuestion++; // z.b. von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
    
}

function resetAnswerButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame(){
    document.getElementById('header-image').src = 'img/quizTime.jpg';
    document.getElementById('questionBody').style = '';
    document.getElementById('endScreen').style = 'display: none';
    currentQuestion = 0;
    rightAnswers = 0;
    init();
}

    