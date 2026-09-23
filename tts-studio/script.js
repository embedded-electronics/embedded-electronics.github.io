import { EdgeTTS } from "https://unpkg.com/@andresaya/edge-tts@latest/dist/browser/edge-tts.esm.min.js";

const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

const voiceSelect = document.getElementById("voice");

const rate = document.getElementById("rate");
const rateValue = document.getElementById("rateValue");

const pitch = document.getElementById("pitch");
const pitchValue = document.getElementById("pitchValue");

const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");

const audioPlayer = document.getElementById("audioPlayer");
const downloadBtn = document.getElementById("downloadBtn");

let currentAudioUrl = null;


// ---------------------------------------------
// Character Counter
// ---------------------------------------------

textInput.addEventListener("input", () => {

    charCount.textContent = textInput.value.length;

});


// ---------------------------------------------
// Speech Rate
// ---------------------------------------------

rate.addEventListener("input", () => {

    rateValue.textContent = `${rate.value}%`;

});


// ---------------------------------------------
// Pitch
// ---------------------------------------------

pitch.addEventListener("input", () => {

    pitchValue.textContent = `${pitch.value}Hz`;

});


// ---------------------------------------------
// Generate MP3
// ---------------------------------------------

generateBtn.addEventListener("click", async () => {

    const text = textInput.value.trim();

    if (!text) {

        alert("Please enter some text.");

        return;
    }


    generateBtn.disabled = true;

    generateBtn.textContent = "Generating...";


    try {

        const voice = voiceSelect.value;

        const rateValueNumber = Number(rate.value);

        const pitchValueNumber = Number(pitch.value);


        const tts = new EdgeTTS();


        await tts.synthesize(

            text,

            voice,

            {

                rate: rateValueNumber,

                pitch: pitchValueNumber,

                volume: 0,

                outputFormat:
                    "audio-24khz-96kbitrate-mono-mp3"

            }

        );


        const audioData = tts.getAudioData();


        const audioBlob = new Blob(

            [audioData],

            {
                type: "audio/mpeg"
            }

        );


        // Remove previous audio URL

        if (currentAudioUrl) {

            URL.revokeObjectURL(currentAudioUrl);

        }


        currentAudioUrl =
            URL.createObjectURL(audioBlob);


        // Audio player

        audioPlayer.src = currentAudioUrl;

        audioPlayer.load();


        // Download link

        downloadBtn.href = currentAudioUrl;

        downloadBtn.download =
            "embedded-electronics-tts.mp3";


        downloadBtn.style.display = "inline-block";


        // Start playback

        await audioPlayer.play();


    }

    catch (error) {

        console.error(error);

        alert(
            "TTS generation failed.\n\n" +
            error.message
        );

    }

    finally {

        generateBtn.disabled = false;

        generateBtn.textContent = "Generate MP3";

    }

});


// ---------------------------------------------
// Clear
// ---------------------------------------------

clearBtn.addEventListener("click", () => {

    textInput.value = "";

    charCount.textContent = "0";

    rate.value = 0;

    pitch.value = 0;

    rateValue.textContent = "0%";

    pitchValue.textContent = "0Hz";

    audioPlayer.removeAttribute("src");

    audioPlayer.load();

    downloadBtn.removeAttribute("href");

});
