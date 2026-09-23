const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

const rate = document.getElementById("rate");
const rateValue = document.getElementById("rateValue");

const pitch = document.getElementById("pitch");
const pitchValue = document.getElementById("pitchValue");

const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");


// Character counter
textInput.addEventListener("input", () => {
    charCount.textContent = textInput.value.length;
});


// Rate
rate.addEventListener("input", () => {
    rateValue.textContent = `${rate.value}%`;
});


// Pitch
pitch.addEventListener("input", () => {
    pitchValue.textContent = `${pitch.value}Hz`;
});


// Clear
clearBtn.addEventListener("click", () => {

    textInput.value = "";

    charCount.textContent = "0";

    rate.value = 0;
    pitch.value = 0;

    rateValue.textContent = "0%";
    pitchValue.textContent = "0Hz";
});


// Generate
generateBtn.addEventListener("click", () => {

    const text = textInput.value.trim();

    if (!text) {
        alert("Please enter some text.");
        return;
    }

    alert(
        "TTS backend will be connected in the next step."
    );
});
