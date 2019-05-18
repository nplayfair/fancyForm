// Questions Array
const questions = [
    { question: 'Enter Your First Name' },
    { question: 'Enter Your Last Name' },
    { question: 'Enter Your Email Address', pattern: /\S+@\S+\.\S+/ },
    { question: 'Create a Password', type: 'password' }
];

// Transition Times
const shakeTime = 100; // Shake transition time
const switchTime = 200; // Transition between questions

// Init position at first questions
let position = 0;

// Init DOM elements
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

// Events

// Get question on DOM load
document.addEventListener('DOMContentLoaded', getQuestion);

// Next button click
nextBtn.addEventListener('click', validate);


// Functions

// Get question from array and add to markup
function getQuestion() {
    // Get current question
    inputLabel.innerHTML = questions[position].question;
    // Get current type
    inputField.type = questions[position].type || 'text';
    // Get current answer
    inputField.value = questions[position].answer || '';
    // Focus on element
    inputField.focus();

    // Set progress bar width - variable to the questions length
    progress.getElementsByClassName.width = (position * 100 ) / questions.length + '%';

    // Add user icon or back arrow, depending on question
    prevBtn.className = position ? 'fas fa-arrow-left' : 'fas fa-user';

    showQuestion();
}

// Display question to user
function showQuestion() {
    inputGroup.style.opacity = 1;
    inputProgress.style.transition = '';
    inputProgress.style.width = '100%';
}

// Hide question from user
function hideQuestion() {
    inputGroup.style.opacity = 0;
    inputLabel.style.marginLeft = 0;
    inputProgress.style.width = 0;
    inputProgress.style.transition = 'none';
    inputGroup.style.border = null;
}

// Transform to create shake motion
function transform(x, y) {
    formBox.style.transform = `translate(${x}px, ${y}px)`;
}

// Validate field
function validate() {
    // Ensure pattern matches if there is one
    if (!inputField.value.match(questions[position].pattern || /.+/)) {
        inputFail();
    } else {
        inputPass();
    }
}

// Field input fail
function inputFail() {
    formBox.className = 'error';
    // Repeat shake motion - set i to number of shake
    for (let i = 0; i < 6; i++) {
        setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);
        setTimeout(transform, shakeTime * 6, 0, 0);
        inputField.focus();
    }
}

// Field input passed
function inputPass() {
    // Remove any error class
    formBox.className = '';

    setTimeout(transform, shakeTime * 0, 0, 10);
    setTimeout(transform, shakeTime * 1, 0, 0);

    // Increment position
    position++;

    // If new question, hide current and get next
    if (questions[position]) {
        hideQuestion();
        getQuestion();
    } else {
        // Remove is no more questions
        hideQuestion();
        formBox.className = 'close';
        progress.style.width = '100%';

        // Form complete
        formComplete();
    }
}