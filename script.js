let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voiceSelect.innerHTML = "";

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
}

// Espera um pequeno intervalo antes de popular a lista de vozes
setTimeout(() => {
    populateVoiceList();
}, 100);

speechSynthesis.onvoiceschanged = () => {
    populateVoiceList();
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});