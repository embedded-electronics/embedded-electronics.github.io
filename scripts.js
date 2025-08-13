/* ===== Embedded Electronics — Shared Script ===== */

// Mobile nav toggle
function toggleMenu(){
  const nav = document.getElementById('nav');
  if (!nav) return;
  const shown = getComputedStyle(nav).display !== 'none';
  nav.style.display = shown ? 'none' : 'flex';
}

// Set current year in footer and active nav state (for static hosting)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

  const links = document.querySelectorAll('.nav a');
  links.forEach(a => {
    if (a.getAttribute('href') && location.pathname.endsWith(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });
});

/* ----------------- QUIZ LOGIC ----------------- */
// Quiz Data
const quizData = [
  {
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Performance Utility", "Control Processing Unit"],
    answer: 0
  },
  {
    question: "Which is a type of microcontroller?",
    options: ["ATmega328", "Intel i9", "Snapdragon 888", "Ryzen 7"],
    answer: 0
  },
  {
    question: "What does GPIO stand for?",
    options: ["General Purpose Input Output", "Global Port Input Output", "General Peripheral Integrated Output", "None of the above"],
    answer: 0
  }
];

let currentQuestionIndex = 0;
let userAnswers = [];

function startQuiz() {
  document.getElementById('timer').style.display = 'block';
  loadQuestion(currentQuestionIndex);
}

function loadQuestion(index) {
  const container = document.getElementById('quiz-container');
  const q = quizData[index];
  
  container.innerHTML = `
    <div class="quiz-slide">
      <h3>Question ${index + 1} of ${quizData.length}</h3>
      <p>${q.question}</p>
      ${q.options.map((opt, i) => `
        <label>
          <input type="radio" name="q${index}" value="${i}" ${userAnswers[index] == i ? "checked" : ""} />
          ${opt}
        </label>
      `).join('')}
    </div>
  `;
  
  // Handle button visibility
  document.getElementById('prev-btn').disabled = index === 0;
  document.getElementById('next-btn').style.display = index === quizData.length - 1 ? 'none' : 'inline-block';
  document.getElementById('submit-btn').style.display = index === quizData.length - 1 ? 'inline-block' : 'none';
}

function nextQuestion() {
  saveAnswer();
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
  }
}

function prevQuestion() {
  saveAnswer();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion(currentQuestionIndex);
  }
}

function saveAnswer() {
  const selected = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
  userAnswers[currentQuestionIndex] = selected ? parseInt(selected.value) : null;
}

function handleSubmit(e) {
  e.preventDefault();
  saveAnswer();
  
  let score = 0;
  quizData.forEach((q, i) => {
    if (userAnswers[i] === q.answer) score++;
  });
  
  document.getElementById('result').innerHTML = `<strong>Your score: ${score}/${quizData.length}</strong>`;
}

/* Contact page: open mailto with prefilled content */
function submitContact(e){
  e.preventDefault();
  const name = document.getElementById('name')?.value.trim() || '';
  const email = document.getElementById('email')?.value.trim() || '';
  const subject = document.getElementById('subject')?.value.trim() || 'Website Contact';
  const msg = document.getElementById('message')?.value.trim() || '';
  if (!name || !email || !msg){ alert('Please fill name, email and message'); return false; }
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
  /* MODIFY HERE: replace email below */
  window.location.href = `mailto:embeddedelectronics.in@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  return false;
}

/* Utility */
function escapeHtml(s){ return String(s).replace(/[&<>"']/g,m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m])); }
