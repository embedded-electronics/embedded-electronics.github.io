// Get quiz set from URL
const params = new URLSearchParams(window.location.search);
const quizSet = params.get('set');

// Load quiz questions from quizData.js
let questions = quizData[quizSet] || [];

document.getElementById('quiz-title').textContent = 
  quizSet ? quizSet.replace(/^\w/, c => c.toUpperCase()) + " Quiz" : "Quiz";

const quizContainer = document.getElementById('quiz-container');
questions.forEach((q, index) => {
  const qElem = document.createElement('div');
  qElem.classList.add('quiz-question');
  qElem.innerHTML = `
    <p>${index + 1}. ${q.question}</p>
    ${q.options.map((opt, i) => `
      <label>
        <input type="radio" name="q${index}" value="${opt}">
        ${opt}
      </label>
    `).join('')}
  `;
  quizContainer.appendChild(qElem);
});

// Submit button handler
document.getElementById('submit-btn').addEventListener('click', () => {
  let score = 0;
  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) score++;
  });
  document.getElementById('result').textContent = `Your Score: ${score} / ${questions.length}`;
});
