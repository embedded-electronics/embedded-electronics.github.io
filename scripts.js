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
const questions = [
  { q: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Central Process Utility"], answer: 0 },
  { q: "Which is a microcontroller?", options: ["8051", "Pentium", "Xeon", "Core i7"], answer: 0 },
  { q: "What is the function of RAM?", options: ["Store data temporarily", "Store data permanently", "Control operations", "Power supply"], answer: 0 }
];

let currentQuestion = 0;
let score = 0;
let timerInterval;

function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}

function startQuiz() {
  document.getElementById("quiz").innerHTML = "";
  currentQuestion = 0;
  score = 0;
  showQuestion(currentQuestion);
  document.querySelector(".quiz-navigation").style.display = "flex";

  // Timer setup
  const timeLimit = parseInt(document.getElementById("quiz-timer").value, 10);
  if (timeLimit > 0) {
    document.getElementById("timer").style.display = "block";
    let timeLeft = timeLimit;
    timerInterval = setInterval(() => {
      timeLeft--;
      document.getElementById("timer-display").textContent =
        String(Math.floor(timeLeft / 60)).padStart(2, '0') + ":" + String(timeLeft % 60).padStart(2, '0');
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        handleSubmit();
      }
    }, 1000);
  }
}

function showQuestion(index) {
  const q = questions[index];
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = `
    <div class="question">
      <p><strong>Q${index + 1}:</strong> ${q.q}</p>
      ${q.options.map((opt, i) => `
        <label><input type="radio" name="q${index}" value="${i}"> ${opt}</label><br>
      `).join("")}
    </div>
  `;

  document.getElementById("prev-btn").style.display = index === 0 ? "none" : "inline-block";
  document.getElementById("next-btn").style.display = index === questions.length - 1 ? "none" : "inline-block";
  document.getElementById("submit-btn").style.display = index === questions.length - 1 ? "inline-block" : "none";
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
}

function handleSubmit(e) {
  if (e) e.preventDefault();
  score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });
  document.getElementById("result").innerHTML = `You scored ${score} / ${questions.length}`;
  clearInterval(timerInterval);
  return false;
}

function resetQuiz() {
  document.getElementById("quiz").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  clearInterval(timerInterval);
}

document.getElementById("year").textContent = new Date().getFullYear();

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
