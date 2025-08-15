const quizSets = {
  set1: [
    { q: "Which of the following microcontroller architectures is based on ARM Cortex-M?", options: ["STM32", "PIC18F", "AT89C51", "8051"], answer: "STM32" },
    { q: "Which protocol is commonly used for short-range wireless communication?", options: ["I2C", "UART", "Bluetooth", "CAN"], answer: "Bluetooth" },
    { q: "In C programming, which header file is needed for printf()?", options: ["stdlib.h", "stdio.h", "string.h", "math.h"], answer: "stdio.h" },
    // ... add up to 30 questions
  ],
  set2: [
    { q: "Which memory is non-volatile?", options: ["SRAM", "DRAM", "EEPROM", "Cache"], answer: "EEPROM" },
    { q: "What is the default baud rate of Arduino UNO Serial Monitor?", options: ["4800", "9600", "115200", "57600"], answer: "9600" },
    { q: "Which layer of OSI model deals with IP addressing?", options: ["Transport", "Network", "Data Link", "Application"], answer: "Network" },
    // ... add up to 30 questions
  ],
  set3: [
    // Add your 30 questions for set 3
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
          <label>
            <input type="radio" name="q${index}" value="${opt}" required> ${opt}
          </label>
        `)
        .join("<br>")}
    `;
    container.appendChild(div);
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
