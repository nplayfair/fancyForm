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
document.addEventListener('DOMContentLoaded', getQuestion);



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