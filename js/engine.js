let sanity = 100;
let currentScene = "start";

const bgEl = document.getElementById("background");
const charEl = document.getElementById("character");
const speakerEl = document.getElementById("speaker");
const textEl = document.getElementById("text");
const choicesEl = document.getElementById("choices");
const sanityEl = document.getElementById("sanity");
const chapterEl = document.getElementById("chapter");

function showScene(id) {
const scene = scenes[id];
if (!scene) return;
currentScene = id;

bgEl.style.backgroundImage = `url('${scene.bg}')`;
charEl.style.backgroundImage = scene.character ? `url('${scene.character}')` : "none";
speakerEl.textContent = scene.speaker || "";
textEl.textContent = scene.text || "";
chapterEl.textContent = scene.chapter || "";
choicesEl.innerHTML = "";

if (scene.sanity) {
    sanity = Math.max(0, Math.min(100, sanity + scene.sanity));
}
sanityEl.textContent = `😎 Спокойствие: ${sanity}`;

if (scene.choices) {
    scene.choices.forEach(choice => {
     const btn = document.createElement("button");
     btn.className = "choice-btn";
     btn.textContent = choice.text;
     btn.onclick = () => {
        if (choice.sanity) {
         sanity = Math.max(0, Math.min(100, sanity + choice.sanity));
        }
        showScene(choice.next);
     };
     choicesEl.appendChild(btn);
    });
} else if (scene.next) {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = "▶ Дальше";
    btn.onclick = () => showScene(scene.next);
    choicesEl.appendChild(btn);
}
}

document.addEventListener("DOMContentLoaded", () => showScene("start"));
