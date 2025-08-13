/* ===== Common JS for All Pages ===== */

/* --- Mobile menu toggle --- */
function toggleMenu() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  nav.classList.toggle('open');
}

/* --- On load: set year & active link --- */
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer(s)
  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
  // Active nav highlight
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});

/* ===== Quiz Logic (One question per screen, radio options, no timer) =====
   Requires a global `quizQuestions` from questions.js
*/
let qIndex = 0;
let userAnswers = {}; // { [index]: optionIndex }

/* Start/Init quiz: call on quiz page after DOM ready */
function initQuiz() {
  if (!Array.isArray(quizQuestions) || quizQuestions.length === 0) return;
  qIndex = 0;
  userAnswers = {};
  renderQuestion();
}

/* Render current question */
function renderQuestion() {
  const holder = document.getElementById('quiz');
  if (!holder) return;

  const total = quizQuestions.length;
  const q = quizQuestions[qIndex];

  // Build options
  let optionsHtml = '';
  q.options.forEach((opt, i) => {
    const checked = userAnswers[qIndex] === i ? 'checked' : '';
    optionsHtml += `
      <label>
        <input type="radio" name="answer" value="${i}" ${checked} />
        ${opt}
      </label>
    `;
  });

  holder.innerHTML = `
    <div class="card quiz-card">
      <div class="quiz-question">Q${qIndex + 1} of ${total}: ${q.question}</div>
      <div class="quiz-options">${optionsHtml}</div>
      <div class="quiz-nav">
        <button class="btn ghost" onclick="prevQuestion()" ${qIndex === 0 ? 'disabled' : ''}>Previous</button>
        ${qIndex === total - 1
          ? `<button class="btn" onclick="submitQuiz()">Submit</button>`
          : `<button class="btn" onclick="nextQuestion()">Next</button>`}
      </div>
    </div>
  `;
}

/* Save current selection */
function saveCurrentAnswer() {
  const picked = document.querySelector('input[name="answer"]:checked');
  if (picked) userAnswers[qIndex] = parseInt(picked.value, 10);
}

/* Next / Previous */
function nextQuestion() {
  saveCurrentAnswer();
  if (qIndex < quizQuestions.length - 1) {
    qIndex++;
    renderQuestion();
  }
}
function prevQuestion() {
  saveCurrentAnswer();
  if (qIndex > 0) {
    qIndex--;
    renderQuestion();
  }
}

/* Submit: compute score & show result */
function submitQuiz() {
  saveCurrentAnswer();
  const total = quizQuestions.length;
  let score = 0;
  quizQuestions.forEach((q, i) => {
    if (userAnswers[i] === q.correct) score++;
  });

  const holder = document.getElementById('quiz');
  if (!holder) return;
  holder.innerHTML = `
    <div class="card quiz-card center">
      <h2>Your Score</h2>
      <p class="muted">You answered ${score} out of ${total} correctly.</p>
      <div class="spacer"></div>
      <button class="btn" onclick="restartQuiz()">Restart Quiz</button>
    </div>
  `;
}

/* Restart */
function restartQuiz() {
  qIndex = 0;
  userAnswers = {};
  renderQuestion();
}

/* Expose quiz functions globally (used by inline handlers) */
window.initQuiz = initQuiz;
window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;
window.submitQuiz = submitQuiz;
window.restartQuiz = restartQuiz;
window.toggleMenu = toggleMenu;
