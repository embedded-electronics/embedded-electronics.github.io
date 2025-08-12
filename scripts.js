/* scripts.js - navigation + small utilities + quiz logic */

/* NAVIGATION: toggle & set active link */
document.addEventListener('DOMContentLoaded', () => {
  // nav toggle for mobile
  const toggle = document.querySelectorAll('.nav-toggle');
  toggle.forEach(t => {
    t.addEventListener('click', () => {
      const nav = document.querySelector('.nav-links');
      if (nav) nav.style.display = (nav.style.display === 'flex' ? 'none' : 'flex');
    });
  });

  // set active nav by matching location
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(a => {
    const href = a.getAttribute('href');
    if (href && location.pathname.endsWith(href)) {
      a.classList.add('active');
    }
  });

  // year replacement
  const yearEls = document.querySelectorAll('#year');
  yearEls.forEach(el => el.textContent = new Date().getFullYear());
});

/* --------------------------
   QUIZ: Questions & logic
   -------------------------- */

/* MODIFY HERE: edit quiz questions, options, and answer strings */
const quizData = [
  {
    question: "Which lines are used by I²C?",
    options: ["MOSI/MISO", "SCL & SDA", "TX & RX"],
    answer: "SCL & SDA"
  },
  {
    question: "ESP8266 is best described as:",
    options: ["A servo motor", "A Wi-Fi microcontroller", "An ADC chip"],
    answer: "A Wi-Fi microcontroller"
  },
  {
    question: "Which sensor gives both temperature and humidity?",
    options: ["LDR", "DHT11 / DHT22", "Hall sensor"],
    answer: "DHT11 / DHT22"
  }
];
/* End of quizData */

/* CONFIG: timer and negative marking (modify as needed) */
const QUIZ_DEFAULT_TIME = 600; // seconds. 0 = no timer. Default used if user selects 'default' option
const NEGATIVE_MARKING = 0; // 0 = disabled. Set to 0.25 for -0.25 per wrong answer

/* runtime state */
let quizStarted = false;
let quizTimer = null;
let timeLeft = 0;

function startQuiz(){
  if (quizStarted) return;
  renderQuiz(); // render questions to DOM
  quizStarted = true;

  // show timer if selected
  const sel = document.getElementById('quiz-timer');
  if (sel){
    const secs = parseInt(sel.value,10) || 0;
    if (secs > 0){
      timeLeft = secs;
      document.getElementById('timer').style.display = 'block';
      updateTimerDisplay();
      quizTimer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
          clearInterval(quizTimer);
          submitQuiz();
        }
      }, 1000);
    } else {
      document.getElementById('timer').style.display = 'none';
    }
  }
}

function renderQuiz(){
  const container = document.getElementById('quiz');
  if (!container) return;
  container.innerHTML = ''; // clear previous
  quizData.forEach((q, idx) => {
    const optsHtml = q.options.map(opt => {
      const safe = escapeHtml(opt);
      return `<label><input type="radio" name="q${idx}" value="${safe}"> ${safe}</label><br>`;
    }).join('');
    container.innerHTML += `<div class="question"><b>Q${idx+1}. ${escapeHtml(q.question)}</b>${optsHtml}</div>`;
  });
  // scroll into view
  container.scrollIntoView({behavior:'smooth'});
}

function handleSubmit(e){
  e.preventDefault();
  submitQuiz();
  return false;
}

function submitQuiz(){
  if (!quizStarted){
    // if user submits without clicking start, render and evaluate anyway
    renderQuiz();
    quizStarted = true;
  }
  if (quizTimer) { clearInterval(quizTimer); quizTimer = null; }
  const nameInput = document.getElementById('quiz-name');
  const username = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Anonymous';

  let score = 0;
  let total = quizData.length;
  let wrong = 0;
  quizData.forEach((q, idx) => {
    const sel = document.querySelector(`input[name="q${idx}"]:checked`);
    if (sel && sel.value === q.answer) {
      score += 1;
    } else {
      wrong += 1;
    }
  });

  // apply negative marking if configured
  if (NEGATIVE_MARKING > 0) {
    const penal = wrong * NEGATIVE_MARKING;
    score = Math.max(0, score - penal);
  }

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<h3>Result for ${escapeHtml(username)}</h3>
    <p>Score: <strong>${score}</strong> out of ${total}</p>
    <p>Correct: ${total - wrong}, Wrong: ${wrong}</p>
    <p class="muted">Note: This is a client-side quiz — scores are not stored on a server. <!-- MODIFY HERE: integrate server if needed --></p>`;

  // optionally store attempt locally (localStorage)
  try {
    const record = { name: username, score, total, date: new Date().toISOString() };
    const key = 'ee_quiz_records';
    const prev = JSON.parse(localStorage.getItem(key) || '[]');
    prev.push(record);
    localStorage.setItem(key, JSON.stringify(prev.slice(-20))); // keep last 20
  } catch (err) {
    console.warn('Could not store quiz result locally', err);
  }
}

/* allow user to reset */
function resetQuiz(){
  if (quizTimer) { clearInterval(quizTimer); quizTimer = null; }
  quizStarted = false;
  const container = document.getElementById('quiz');
  if (container) container.innerHTML = '';
  const resultDiv = document.getElementById('result');
  if (resultDiv) resultDiv.innerHTML = '';
  document.getElementById('timer').style.display = 'none';
}

/* timer display */
function updateTimerDisplay(){
  const d = document.getElementById('timer-display');
  if (!d) return;
  const mm = String(Math.floor(timeLeft / 60)).padStart(2,'0');
  const ss = String(timeLeft % 60).padStart(2,'0');
  d.textContent = `${mm}:${ss}`;
}

/* contact form fallback: open mailto with prefilled body */
function submitContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim() || 'Contact from site';
  const msg = document.getElementById('message').value.trim();
  if(!name || !email || !msg){ alert('Please fill name, email and message'); return false; }
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
  // MODIFY HERE: replace youremail@example.com with your real contact email if desired
  window.location.href = `mailto:youremail@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  return false;
}

/* small helper to escape HTML inside dynamically created strings */
function escapeHtml(unsafe) {
  return String(unsafe).replace(/[&<"'>]/g, function(m) {
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]);
  });
}
