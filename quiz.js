let currentQuizSet = [];
let selectedAnswers = {};

function startQuiz(setNumber) {
    const quizSets = {
        1: quizSet1,
        2: quizSet2,
        3: quizSet3
        // Add more if needed
    };

    currentQuizSet = quizSets[setNumber];
    selectedAnswers = {};

    document.querySelector(".quiz-grid").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");

    const quizQuestionsDiv = document.getElementById("quiz-questions");
    quizQuestionsDiv.innerHTML = "";

    currentQuizSet.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("quiz-question");

        let optionsHtml = q.options.map((opt, optIndex) => `
            <label>
                <input type="radio" name="q${index}" value="${optIndex}">
                ${opt}
            </label>
        `).join("");

        questionDiv.innerHTML = `<h4>Q${index + 1}. ${q.question}</h4>${optionsHtml}`;
        quizQuestionsDiv.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;

    currentQuizSet.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });

    document.getElementById("quiz-result").innerHTML =
        `<h3>Your Score: ${score} / ${currentQuizSet.length}</h3>`;
}
