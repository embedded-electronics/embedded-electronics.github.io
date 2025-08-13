// Navigation toggle for mobile
function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}

// Footer year
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Quiz Data — MODIFY HERE
const quizData = [
  {
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Performance Utility", "Control Processing Unit"],
    answer: "Central Processing Unit"
  },
  {
    question: "Which language is primarily used for Arduino programming?",
    options: ["Python", "C/C++", "Java", "Assembly"],
    answer: "C/C++"
  },
  {
    question: "What is the default baud rate for Arduino Serial Monitor?",
    options: ["4800", "9600", "115200", "19200"],
    answer: "9600"
  }
];

let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval = null;

// Start Quiz
function startQuiz() {
  const name = document.getElementById("quiz-name").value.trim();
  const timeLimit = parseInt(document.getElementById("quiz-timer").value);

  if (!name) {
    alert("Please enter your name before starting.");
    return;
  }

  document.querySelector(".quiz-meta").style.display = "none";
  document.getElementById("quiz-form").style.display = "block";
  currentQuestionIndex = 0;
  userAnswers = new Array(quizData.length).fill(null);
  showQuestion();

  if (timeLimit > 0) {
    startTimer(timeLimit);
  }
}

// Show Question
function showQuestion() {
  const quizEl = document.getElementById("quiz-question");
  const q = quizData[currentQuestionIndex];

  quizEl.innerHTML = `
    <h2>Question ${currentQuestionIndex + 1} of ${quizData.length}</h2>
    <p>${q.question}</p>
    <select id="answer-select">
      <option value="">Select an answer</option>
      ${q.options.map(opt => `<option value="${opt}" ${userAnswers[currentQuestionIndex] === opt ? 'selected' : ''}>${opt}</option>`).join("")}
    </select>
  `;

  document.getElementById("next-btn").style.display = (currentQuestionIndex < quizData.length - 1) ? "inline-block" : "none";
  document.getElementById("submit-btn").style.display = (currentQuestionIndex === quizData.length - 1) ? "inline-block" : "none";
}

// Next Question
function nextQuestion() {
  saveAnswer();
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
}

// Previous Question
function prevQuestion() {
  saveAnswer();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

// Save selected answer
function saveAnswer() {
  const selected = document.getElementById("answer-select").value;
  userAnswers[currentQuestionIndex] = selected || null;
}

// Submit Quiz
function handleSubmit(event) {
  event.preventDefault();
  saveAnswer();

  let score = 0;
  quizData.forEach((q, i) => {
    if (userAnswers[i] === q.answer) {
      score++;
    }
  });

  document.getElementById("quiz-form").style.display = "none";
  document.getElementById("result").innerHTML = `<h3>${document.getElementById("quiz-name").value}, you scored ${score} out of ${quizData.length}.</h3>`;
  stopTimer();
  return false;
}

// Timer
function startTimer(seconds) {
  const timerDisplay = document.getElementById("timer");
  const timeSpan = document.getElementById("timer-display");
  timerDisplay.style.display = "block";

  let remaining = seconds;
  timerInterval = setInterval(() => {
    let min = String(Math.floor(remaining / 60)).padStart(2, "0");
    let sec = String(remaining % 60).padStart(2, "0");
    timeSpan.textContent = `${min}:${sec}`;
    if (remaining <= 0) {
      clearInterval(timerInterval);
      alert("Time is up!");
      handleSubmit(new Event("submit"));
    }
    remaining--;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}
