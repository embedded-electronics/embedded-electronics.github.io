// ===== Menu Toggle (for mobile) =====
function toggleMenu() {
  document.getElementById('nav').classList.toggle('open');
}

// ===== Quiz Logic =====
let currentQuestionIndex = 0;
let answers = {};

function loadQuestion() {
  const question = quizQuestions[currentQuestionIndex];
  const quizElement = document.getElementById("quiz");

  let optionsHTML = '';
  question.options.forEach((option, index) => {
    const isChecked = answers[currentQuestionIndex] === index ? "checked" : "";
    optionsHTML += `
      <label>
        <input type="radio" name="answer" value="${index}" ${isChecked}>
        ${option}
      </label>
    `;
  });

  quizElement.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-question">${question.question}</div>
      <div class="quiz-options">${optionsHTML}</div>
      <div class="quiz-nav">
        <button class="btn" onclick="prevQuestion()" ${currentQuestionIndex === 0 ? "disabled" : ""}>Previous</button>
        ${currentQuestionIndex === quizQuestions.length - 1
          ? `<button class="btn" onclick="submitQuiz()">Submit</button>`
          : `<button class="btn" onclick="nextQuestion()">Next</button>`}
      </div>
    </div>
  `;
}

function nextQuestion() {
  saveAnswer();
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  }
}

function prevQuestion() {
  saveAnswer();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function saveAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (selected) {
    answers[currentQuestionIndex] = parseInt(selected.value);
  }
}

function submitQuiz() {
  saveAnswer();
  let score = 0;
  quizQuestions.forEach((q, i) => {
    if (answers[i] === q.correct) {
      score++;
    }
  });

  document.getElementById("quiz").innerHTML = `
    <div class="quiz-container">
      <h2>Your Score: ${score} / ${quizQuestions.length}</h2>
      <button class="btn" onclick="restartQuiz()">Restart</button>
    </div>
  `;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  answers = {};
  loadQuestion();
}
