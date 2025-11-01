// ===== Interview Set Page Logic =====
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const setName = params.get("set");
  const qaList = interviewData[setName] || [];

  const title = document.getElementById("set-title");
  const container = document.getElementById("qa-container");

  title.textContent = setName
    ? setName.replace(/_/g, " ").toUpperCase() + " — Interview Q&A"
    : "Interview Q&A";

  qaList.forEach((item, i) => {
    const qBtn = document.createElement("button");
    qBtn.className = "accordion";
    qBtn.innerHTML = `Q${i + 1}: ${item.question}`;

    const panel = document.createElement("div");
    panel.className = "panel";
    panel.innerHTML = `<p><strong>Answer:</strong> ${item.answer}</p>`;

    container.appendChild(qBtn);
    container.appendChild(panel);
  });

  // Accordion Functionality
  setTimeout(() => {
    const acc = document.querySelectorAll(".accordion");
    acc.forEach(btn => {
      btn.addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
      });
    });
  }, 300);
});
