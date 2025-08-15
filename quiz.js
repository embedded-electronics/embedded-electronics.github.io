const quizSets = {
  set1: [
    {
      q: "Which of the following designed system factors are optimized or enhanced for an embedded application?",
      options: ["Performance", "Reliability", "Efficiency", "All the above"],
      answer: "All the above"
    },
    {
      q: "Which of the following are the components of a microcontroller?",
      options: ["RAM", "ROM", "Timers", "All the above"],
      answer: "All the above"
    }
    // Add up to 30 questions here...
  ],
  set2: [
    // Add 30 questions here...
  ],
  set3: [
    // Add 30 questions here...
  ]
};

function loadQuizSet() {
  const setName = document.getElementById("quizSet").value;
  const container = document.getElementById("quizContainer");
  container.innerHTML = "";

  quizSets[setName].forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("quiz-question");

    div.innerHTML = `
      <h3>Q${index + 1}: ${item.q}</h3>
      ${item.options
        .map(opt => `
          <div class="quiz-option">
            <input type="radio" name="q${index}" value="${opt}" required>
            <label>${opt}</label>
          </div>
        `)
        .join("")}
    `;
    container.appendChild(div);
  });
}

function renderQuiz() {
  const container = document.getElementById('quiz');
  if (!container) return;
  container.innerHTML = '';
  quizData.forEach((q, i) => {
    const opts = q.options.map(o =>
      `<label><input type="radio" name="q${i}" value="${escapeHtml(o)}"> ${escapeHtml(o)}</label>`
    ).join('');
    container.innerHTML += `
      <div class="quiz-card">
        <b>Q${i+1}: ${escapeHtml(q.question)}</b>
        ${opts}
      </div>
    `;
  });
}

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const setName = document.getElementById("quizSet").value;
  const questions = quizSets[setName];
  let score = 0;

  questions.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === item.answer) {
      score++;
    }
  });

  document.getElementById("result").innerText = `Your Score: ${score} / ${questions.length}`;
});

window.onload = loadQuizSet;
