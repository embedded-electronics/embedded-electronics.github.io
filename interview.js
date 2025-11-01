// Get interview set name from URL
const params = new URLSearchParams(window.location.search);
const interviewSet = params.get('set');

// Load Q&A data from interviewData.js
let questions = interviewData[interviewSet] || [];

// Set page title
document.getElementById('interview-title').textContent = 
  interviewSet ? interviewSet.replace(/_/g, ' ').toUpperCase() + " — Interview Q&A" : "Interview Q&A";

// Display questions
const container = document.getElementById('interview-container');
questions.forEach((q, index) => {
  const qElem = document.createElement('div');
  qElem.classList.add('interview-question');
  qElem.innerHTML = `
    <h3>${index + 1}. ${q.question}</h3>
    <p><strong>Answer:</strong> ${q.answer}</p>
  `;
  container.appendChild(qElem);
});
