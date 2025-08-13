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
/* MODIFY HERE: edit your quiz questions */
const quizData = [
  { question: 'Which lines are used by I²C?', options: ['TX/RX', 'SCL & SDA', 'MOSI/MISO'], answer: 'SCL & SDA' },
  { question: 'ESP8266 is a:', options: ['Motor driver', 'Wi-Fi MCU', 'ADC chip'], answer: 'Wi-Fi MCU' },
  { question: 'DHT11 measures:', options: ['Light only', 'Temp & Humidity', 'Acceleration'], answer: 'Temp & Humidity' }
];

let quizStarted = false;
let quizTimer = null;
let timeLeft = 0;

function startQuiz(){
  if (quizStarted) return;
  renderQuiz();
  quizStarted = true;

  const sel = document.getElementById('quiz-timer');
  const secs = sel ? parseInt(sel.value,10) : 0;
  if (secs > 0){
    timeLeft = secs;
    const timerWrap = document.getElementById('timer');
    if (timerWrap) timerWrap.style.display = 'inline-block';
    updateTimerDisplay();
    quizTimer = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0){ clearInterval(quizTimer); submitQuiz(); }
    }, 1000);
  }
}

function renderQuiz(){
  const container = document.getElementById('quiz');
  if (!container) return;
  container.innerHTML = '';
  quizData.forEach((q, i) => {
    const opts = q.options.map(o =>
      `<label><input type="radio" name="q${i}" value="${escapeHtml(o)}"> ${escapeHtml(o)}</label>`
    ).join('<br>');
    container.innerHTML += `<div class="question"><b>Q${i+1}. ${escapeHtml(q.question)}</b>${opts}</div>`;
  });
}

function handleSubmit(e){ e.preventDefault(); submitQuiz(); return false; }

function submitQuiz(){
  if (quizTimer){ clearInterval(quizTimer); quizTimer = null; }
  let correct = 0;
  quizData.forEach((q, i) => {
    const sel = document.querySelector(`input[name="q${i}"]:checked`);
    if (sel && sel.value === q.answer) correct++;
  });
  const name = (document.getElementById('quiz-name')?.value || 'Anonymous').trim() || 'Anonymous';
  const result = document.getElementById('result');
  if (result){
    result.innerHTML = `<h3>Result for ${escapeHtml(name)}</h3>
      <p>Score: <strong>${correct}</strong> / ${quizData.length}</p>`;
  }
  // store last attempt locally
  try {
    const key = 'ee_quiz_history';
    const recs = JSON.parse(localStorage.getItem(key) || '[]');
    recs.push({ name, correct, total: quizData.length, date: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(recs.slice(-25)));
  } catch(e){}
}

function resetQuiz(){
  if (quizTimer){ clearInterval(quizTimer); quizTimer = null; }
  quizStarted = false;
  const container = document.getElementById('quiz'); if (container) container.innerHTML = '';
  const result = document.getElementById('result'); if (result) result.innerHTML = '';
  const timerWrap = document.getElementById('timer'); if (timerWrap) timerWrap.style.display = 'none';
}

function updateTimerDisplay(){
  const el = document.getElementById('timer-display'); if (!el) return;
  const m = String(Math.floor(timeLeft/60)).padStart(2,'0');
  const s = String(timeLeft%60).padStart(2,'0');
  el.textContent = `${m}:${s}`;
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
